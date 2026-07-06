/**
 * ============================================================
 *  스페이스클라우드 예약 → 고객 안내 문자 자동 발송 시스템
 *  (Google Apps Script)
 * ============================================================
 *
 *  동작 원리:
 *    1. 스페이스클라우드가 호스트에게 보내는 "예약 알림 메일"을
 *       Gmail에서 주기적으로(5분마다) 검색합니다.
 *    2. 메일 본문에서 예약자 이름 / 연락처 / 이용 날짜·시간을 추출합니다.
 *    3. 문자 발송 API(알리고 또는 솔라피)로 안내 문자를 자동 발송합니다.
 *       (출입 비밀번호, 주차 안내 등 CONFIG.MESSAGE_TEMPLATE 내용)
 *    4. 처리한 메일에는 라벨을 붙여 중복 발송을 방지합니다.
 *    5. 파싱 실패/발송 실패 시 관리자에게 알림 메일을 보냅니다.
 *
 *  설치 방법은 같은 폴더의 README.md 참고.
 */

// ============================================================
// 1. 기본 설정 — 여기만 수정하면 됩니다
// ============================================================
var CONFIG = {
  // 테스트 모드. true면 문자를 실제로 보내지 않고 로그만 남깁니다.
  // 설정을 모두 마치고 테스트가 끝나면 false로 바꾸세요.
  DRY_RUN: true,

  // 문자 발송 업체: 'aligo'(알리고) 또는 'solapi'(솔라피)
  PROVIDER: 'aligo',

  // 예약 알림 메일을 찾는 Gmail 검색어.
  // 실제 예약 알림 메일이 도착하면 제목을 확인하고 필요 시 조정하세요.
  SEARCH_QUERY: 'from:office@spacecloud.kr subject:(예약) newer_than:2d',

  // 메일 제목/본문에 이 키워드 중 하나가 있어야 "발송 대상"으로 판단합니다.
  // 예약 취소 메일 등에 잘못 발송되는 것을 막는 안전장치입니다.
  CONFIRM_KEYWORDS: ['예약이 확정', '예약 확정', '새로운 예약', '예약이 접수'],

  // 이 키워드가 있으면 발송하지 않고 건너뜁니다 (취소/환불 메일 등).
  SKIP_KEYWORDS: ['취소', '환불'],

  // 여러 공간을 운영 중이므로, 이 문자열이 메일에 포함된 예약만 처리합니다.
  // 모든 공간의 예약에 발송하려면 '' (빈 문자열)로 두세요.
  SPACE_FILTER: '와리프',

  // 처리 완료/실패 표시용 Gmail 라벨 (자동 생성됨)
  PROCESSED_LABEL: '스페이스클라우드/문자발송완료',
  FAILED_LABEL: '스페이스클라우드/확인필요',

  // 파싱 실패 등 문제 발생 시 알림 받을 이메일 (기본: 본인 Gmail)
  ADMIN_EMAIL: Session.getActiveUser().getEmail(),

  // ----------------------------------------------------------
  // 고객에게 보낼 문자 내용.
  // {이름} {공간명} {날짜} {시간} 부분은 예약 정보로 자동 치환됩니다.
  // [ ] 로 표시된 부분을 실제 정보로 채워 넣으세요.
  // ----------------------------------------------------------
  MESSAGE_TEMPLATE: [
    '[와리프 소극장] 예약 확정 안내',
    '',
    '{이름}님, 예약이 확정되었습니다.',
    '',
    '■ 이용 일시: {날짜} {시간}',
    '■ 주소: [극장 주소 입력]',
    '■ 출입 비밀번호: [비밀번호 입력]',
    '■ 주차 안내: [주차 안내 입력]',
    '',
    '※ 퇴실 시 소등 및 정리 부탁드립니다.',
    '문의: [극장 연락처 입력]'
  ].join('\n'),

  // LMS(장문) 발송 시 표시될 제목
  LMS_TITLE: '[와리프 소극장] 예약 안내'
};

// ============================================================
// 2. 메인 함수 — 트리거가 5분마다 실행
// ============================================================
function checkNewReservations() {
  var processedLabel = getOrCreateLabel_(CONFIG.PROCESSED_LABEL);
  var failedLabel = getOrCreateLabel_(CONFIG.FAILED_LABEL);

  var query = CONFIG.SEARCH_QUERY +
    ' -label:' + toLabelQuery_(CONFIG.PROCESSED_LABEL) +
    ' -label:' + toLabelQuery_(CONFIG.FAILED_LABEL);

  var threads = GmailApp.search(query, 0, 20);
  if (threads.length === 0) {
    Logger.log('새 예약 메일 없음. (검색어: ' + query + ')');
    return;
  }

  threads.forEach(function (thread) {
    var message = thread.getMessages()[0];
    var subject = message.getSubject() || '';
    var body = message.getPlainBody() || '';
    var full = subject + '\n' + body;

    try {
      // 공간 필터
      if (CONFIG.SPACE_FILTER && full.indexOf(CONFIG.SPACE_FILTER) === -1) {
        Logger.log('다른 공간 예약이라 건너뜀: ' + subject);
        thread.addLabel(processedLabel);
        return;
      }
      // 취소/환불 메일 제외
      if (containsAny_(full, CONFIG.SKIP_KEYWORDS)) {
        Logger.log('취소/환불 메일이라 건너뜀: ' + subject);
        thread.addLabel(processedLabel);
        return;
      }
      // 예약 확정 키워드 확인
      if (!containsAny_(full, CONFIG.CONFIRM_KEYWORDS)) {
        Logger.log('예약 확정 메일이 아니라 건너뜀: ' + subject);
        thread.addLabel(processedLabel);
        return;
      }

      var info = parseReservation_(subject, body);
      if (!info.phone) {
        throw new Error('메일에서 고객 전화번호를 찾지 못했습니다.');
      }

      var text = buildMessage_(info);
      sendSms_(info.phone, text);

      thread.addLabel(processedLabel);
      Logger.log('발송 완료: ' + info.name + ' (' + info.phone + ') / ' + subject);
    } catch (e) {
      thread.addLabel(failedLabel);
      notifyAdmin_(subject, String(e && e.message ? e.message : e), body);
      Logger.log('처리 실패: ' + subject + ' → ' + e);
    }
  });
}

// ============================================================
// 3. 메일 본문 파싱
//    스페이스클라우드 메일 형식이 바뀌면 이 부분의 정규식을 조정하세요.
//    testParse() 함수로 결과를 미리 확인할 수 있습니다.
// ============================================================
function parseReservation_(subject, body) {
  var text = subject + '\n' + body;

  // 휴대폰 번호 (010-1234-5678, 01012345678 등)
  var phone = null;
  var phoneMatch = text.match(/01[016789][-.\s]?\d{3,4}[-.\s]?\d{4}/);
  if (phoneMatch) {
    phone = phoneMatch[0].replace(/[-.\s]/g, '');
  }

  // 예약자 이름: "예약자 홍길동" / "예약자명: 홍길동" / "성명 : 홍길동" 등
  var name = matchFirst_(text, [
    /예약자\s*(?:명|이름)?\s*[:：]?\s*([가-힣a-zA-Z]{2,10})/,
    /게스트\s*[:：]?\s*([가-힣a-zA-Z]{2,10})/,
    /성\s*명\s*[:：]?\s*([가-힣a-zA-Z]{2,10})/
  ]) || '고객';

  // 이용 날짜: 2026-07-10, 2026.07.10, 2026년 7월 10일 등
  var date = matchFirst_(text, [
    /(\d{4}[-./년]\s?\d{1,2}[-./월]\s?\d{1,2}일?(?:\s?\([일월화수목금토]\))?)/
  ]) || '';

  // 이용 시간: 14:00 ~ 18:00, 14시~18시 등
  var time = matchFirst_(text, [
    /(\d{1,2}:\d{2}\s*[~\-–]\s*\d{1,2}:\d{2})/,
    /(\d{1,2}시\s*[~\-–]\s*\d{1,2}시)/,
    /(\d{1,2}:\d{2})/
  ]) || '';

  // 공간명
  var space = matchFirst_(text, [
    /공간\s*(?:명|이름)?\s*[:：]\s*(.+)/
  ]) || CONFIG.SPACE_FILTER || '';

  return {
    name: name.trim(),
    phone: phone,
    date: date.trim(),
    time: time.trim(),
    space: space.trim()
  };
}

function buildMessage_(info) {
  return CONFIG.MESSAGE_TEMPLATE
    .replace(/\{이름\}/g, info.name)
    .replace(/\{공간명\}/g, info.space)
    .replace(/\{날짜\}/g, info.date || '(호스트센터에서 확인)')
    .replace(/\{시간\}/g, info.time || '');
}

// ============================================================
// 4. 문자 발송 (알리고 / 솔라피)
//    API 키는 코드에 적지 않고 "스크립트 속성"에 저장합니다. README 참고.
// ============================================================
function sendSms_(to, text) {
  if (CONFIG.DRY_RUN) {
    Logger.log('[테스트 모드] 실제 발송 안 함.\n받는 사람: ' + to + '\n내용:\n' + text);
    return;
  }
  if (CONFIG.PROVIDER === 'aligo') {
    sendViaAligo_(to, text);
  } else if (CONFIG.PROVIDER === 'solapi') {
    sendViaSolapi_(to, text);
  } else {
    throw new Error('알 수 없는 PROVIDER 설정: ' + CONFIG.PROVIDER);
  }
}

// --- 알리고 (https://smartsms.aligo.in) ---
function sendViaAligo_(to, text) {
  var props = PropertiesService.getScriptProperties();
  var key = props.getProperty('ALIGO_API_KEY');
  var userId = props.getProperty('ALIGO_USER_ID');
  var sender = props.getProperty('SENDER_PHONE');
  if (!key || !userId || !sender) {
    throw new Error('스크립트 속성에 ALIGO_API_KEY / ALIGO_USER_ID / SENDER_PHONE을 설정하세요.');
  }

  var isLms = smsByteLength_(text) > 90;
  var payload = {
    key: key,
    user_id: userId,
    sender: sender,
    receiver: to,
    msg: text,
    msg_type: isLms ? 'LMS' : 'SMS'
  };
  if (isLms) payload.title = CONFIG.LMS_TITLE;

  var res = UrlFetchApp.fetch('https://apis.aligo.in/send/', {
    method: 'post',
    payload: payload,
    muteHttpExceptions: true
  });
  var json = JSON.parse(res.getContentText());
  if (String(json.result_code) !== '1') {
    throw new Error('알리고 발송 실패: ' + res.getContentText());
  }
}

// --- 솔라피 (https://solapi.com) ---
function sendViaSolapi_(to, text) {
  var props = PropertiesService.getScriptProperties();
  var apiKey = props.getProperty('SOLAPI_API_KEY');
  var apiSecret = props.getProperty('SOLAPI_API_SECRET');
  var sender = props.getProperty('SENDER_PHONE');
  if (!apiKey || !apiSecret || !sender) {
    throw new Error('스크립트 속성에 SOLAPI_API_KEY / SOLAPI_API_SECRET / SENDER_PHONE을 설정하세요.');
  }

  var date = new Date().toISOString();
  var salt = Utilities.getUuid();
  var sigBytes = Utilities.computeHmacSha256Signature(date + salt, apiSecret);
  var signature = sigBytes.map(function (b) {
    var v = (b < 0 ? b + 256 : b).toString(16);
    return v.length === 1 ? '0' + v : v;
  }).join('');

  var res = UrlFetchApp.fetch('https://api.solapi.com/messages/v4/send', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'HMAC-SHA256 apiKey=' + apiKey +
        ', date=' + date + ', salt=' + salt + ', signature=' + signature
    },
    payload: JSON.stringify({
      message: { to: to, from: sender, text: text }
    }),
    muteHttpExceptions: true
  });
  if (res.getResponseCode() >= 300) {
    throw new Error('솔라피 발송 실패: ' + res.getContentText());
  }
}

// SMS 바이트 수 계산 (한글 2바이트 기준, 90바이트 초과 시 LMS)
function smsByteLength_(text) {
  var len = 0;
  for (var i = 0; i < text.length; i++) {
    len += text.charCodeAt(i) > 127 ? 2 : 1;
  }
  return len;
}

// ============================================================
// 5. 관리자 알림 및 유틸리티
// ============================================================
function notifyAdmin_(subject, reason, body) {
  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: '[예약 문자 자동발송] 처리 실패 — 수동 확인 필요',
    body: '아래 예약 메일을 자동 처리하지 못했습니다. 고객에게 직접 안내 문자를 보내주세요.\n\n' +
      '메일 제목: ' + subject + '\n' +
      '실패 사유: ' + reason + '\n\n' +
      '--- 메일 본문 (앞부분) ---\n' + String(body).slice(0, 1500)
  });
}

function containsAny_(text, keywords) {
  return keywords.some(function (k) { return text.indexOf(k) !== -1; });
}

function matchFirst_(text, patterns) {
  for (var i = 0; i < patterns.length; i++) {
    var m = text.match(patterns[i]);
    if (m && m[1]) return m[1];
  }
  return null;
}

function getOrCreateLabel_(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}

// Gmail 검색어에서 라벨 이름은 공백을 하이픈으로 바꿔야 함
function toLabelQuery_(name) {
  return name.replace(/\s+/g, '-');
}

// ============================================================
// 6. 설치/테스트용 함수 — Apps Script 편집기에서 직접 실행
// ============================================================

/**
 * [설치] 5분마다 checkNewReservations를 실행하는 트리거를 만듭니다.
 * 한 번만 실행하면 됩니다. (중복 실행해도 기존 트리거는 정리됨)
 */
function setup() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'checkNewReservations') {
      ScriptApp.deleteTrigger(t);
    }
  });
  ScriptApp.newTrigger('checkNewReservations').timeBased().everyMinutes(5).create();
  getOrCreateLabel_(CONFIG.PROCESSED_LABEL);
  getOrCreateLabel_(CONFIG.FAILED_LABEL);
  Logger.log('설치 완료: 5분마다 자동 실행됩니다.');
}

/**
 * [테스트 1] 가장 최근 예약 메일을 찾아 파싱 결과만 로그로 보여줍니다.
 * 문자는 발송하지 않습니다. 실제 예약 메일이 도착한 뒤 실행해보세요.
 */
function testParse() {
  var threads = GmailApp.search(CONFIG.SEARCH_QUERY, 0, 5);
  if (threads.length === 0) {
    Logger.log('검색된 예약 메일이 없습니다. SEARCH_QUERY를 확인하세요: ' + CONFIG.SEARCH_QUERY);
    return;
  }
  threads.forEach(function (thread) {
    var msg = thread.getMessages()[0];
    var info = parseReservation_(msg.getSubject(), msg.getPlainBody());
    Logger.log('제목: ' + msg.getSubject());
    Logger.log('파싱 결과: ' + JSON.stringify(info, null, 2));
    Logger.log('발송될 문자:\n' + buildMessage_(info));
    Logger.log('------------------------------------');
  });
}

/**
 * [테스트 2] 아래 번호로 실제 테스트 문자를 1건 보냅니다.
 * DRY_RUN이 true면 로그만 남습니다. 본인 번호로 바꿔서 실행하세요.
 */
function sendTestSms() {
  var myPhone = '01000000000'; // ← 본인 휴대폰 번호로 변경
  var sample = buildMessage_({
    name: '홍길동',
    phone: myPhone,
    date: '2026-07-10 (금)',
    time: '14:00 ~ 18:00',
    space: CONFIG.SPACE_FILTER
  });
  sendSms_(myPhone, sample);
  Logger.log('테스트 발송 시도 완료 (DRY_RUN=' + CONFIG.DRY_RUN + ')');
}
