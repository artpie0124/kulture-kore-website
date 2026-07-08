// ============================================================
//  3단계: 상시 감시 — 새 예약을 자동 감지하고 고객에게 문자 발송
//  (이 프로그램을 켜두면 POLL_INTERVAL_SEC 마다 예약을 확인합니다)
//
//  동작: 호스트센터 "예약 관리 리스트"에서 상태가 '예약확정'이고
//  전화번호가 노출된 새 예약을 찾아 고객에게 안내 문자를 보냅니다.
//  (취소/이용완료 예약은 개인정보가 가려져 있어 자동 제외됩니다)
// ============================================================
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config');

const sessionPath = path.join(__dirname, CONFIG.SESSION_FILE);
const processedPath = path.join(__dirname, CONFIG.PROCESSED_FILE);

function loadProcessed() {
  try {
    return new Set(JSON.parse(fs.readFileSync(processedPath, 'utf8')));
  } catch (e) {
    return new Set();
  }
}
function saveProcessed(set) {
  fs.writeFileSync(processedPath, JSON.stringify([...set], null, 2), 'utf8');
}

function log(msg) {
  const t = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log('[' + t + '] ' + msg);
}

// 발송 대상으로 볼 상태(확정) / 제외할 상태
const SEND_STATUS = ['예약확정', '예약완료', '이용예정'];
const SKIP_STATUS = ['취소환불', '취소', '환불', '이용완료', '노쇼', '예약대기'];
const ALL_STATUS = [...SEND_STATUS, ...SKIP_STATUS];

// 예약 목록 페이지의 전체 텍스트를 예약 카드 단위로 쪼개 파싱
function parseReservations(pageText) {
  // 상태 배지를 기준으로 블록을 나눔 (각 카드는 상태 배지로 시작)
  const statusRegex = new RegExp('(' + ALL_STATUS.join('|') + ')', 'g');
  const parts = pageText.split(statusRegex);

  const list = [];
  // split 결과: [앞부분, 상태1, 내용1, 상태2, 내용2, ...]
  for (let i = 1; i < parts.length; i += 2) {
    const status = parts[i];
    const body = parts[i + 1] || '';
    const numMatch = body.match(/예약번호\s*(\d+)/);
    if (!numMatch) continue;
    const id = numMatch[1];

    const phoneMatch = body.match(/01[016789]-?\d{3,4}-?\d{4}/);
    const phone = phoneMatch ? phoneMatch[0].replace(/-/g, '') : null;

    // 이름: 전화번호 바로 앞의 한글 이름, 없으면 마스킹된 이름
    let name = '고객';
    const nameBeforePhone = body.match(/([가-힣]{2,4})\s*01[016789]-?\d{3,4}-?\d{4}/);
    if (nameBeforePhone) name = nameBeforePhone[1];

    const dateMatch = body.match(
      /(\d{4}[.\/]\s?\d{1,2}[.\/]\s?\d{1,2}\s?\([일월화수목금토]\))/
    );
    const date = dateMatch ? dateMatch[1].replace(/\s/g, '') : '';

    const timeMatch =
      body.match(/(\d{1,2}\s?[~-]\s?\d{1,2}\s?시)/) ||
      body.match(/(\d{1,2}:\d{2}\s*[~\-–]\s*\d{1,2}:\d{2})/);
    const time = timeMatch ? timeMatch[1].replace(/\s/g, '') : '';

    const spaceMatch = body.match(/(공연장[^\n]*|[^\n]*복합문화공간)/);
    const spaceText = spaceMatch ? spaceMatch[0] : body;

    list.push({ id, status, phone, name, date, time, spaceText });
  }
  return list;
}

function buildMessage(info) {
  return CONFIG.MESSAGE_TEMPLATE.replace(/\{이름\}/g, info.name)
    .replace(/\{날짜\}/g, info.date || '(예약 내역에서 확인)')
    .replace(/\{시간\}/g, info.time || '');
}

async function sendSms(to, text) {
  const url =
    CONFIG.PHONE_WEBHOOK_URL +
    (CONFIG.PHONE_WEBHOOK_URL.includes('?') ? '&' : '?') +
    'to=' + encodeURIComponent(to) +
    '&text=' + encodeURIComponent(text);
  const res = await fetch(url);
  if (!res.ok) throw new Error('문자 발송 신호 실패 HTTP ' + res.status);
}

async function checkOnce(context, processed, isFirstRun) {
  const page = await context.newPage();
  try {
    await page.goto(CONFIG.RESERVATION_LIST_URL, {
      waitUntil: 'networkidle',
      timeout: 60000
    });
    await page.waitForTimeout(3500); // SPA 렌더링 대기

    if (/login/i.test(page.url())) {
      log('⚠️ 로그인이 만료되었습니다. "로그인.bat"을 다시 실행해 재로그인하세요.');
      return;
    }

    const pageText = await page.evaluate(() => document.body.innerText);
    const reservations = parseReservations(pageText);

    if (reservations.length === 0) {
      log('예약 카드를 찾지 못했습니다. (페이지 로딩 지연이거나 사이트 구조 변경일 수 있음)');
      return;
    }

    for (const r of reservations) {
      if (processed.has(r.id)) continue;

      // 공간 필터
      if (CONFIG.SPACE_FILTER && !r.spaceText.includes(CONFIG.SPACE_FILTER)) {
        processed.add(r.id);
        continue;
      }
      // 발송 대상 상태가 아니면 기록만 하고 건너뜀
      if (!SEND_STATUS.includes(r.status)) {
        processed.add(r.id);
        continue;
      }
      // 전화번호가 없으면(가려짐 등) 발송 불가 — 기록하고 건너뜀
      if (!r.phone) {
        log('예약 ' + r.id + ' (' + r.status + '): 전화번호 미노출 → 건너뜀');
        processed.add(r.id);
        continue;
      }

      // 첫 실행이면: 기존 예약은 발송하지 않고 기준선으로만 등록
      if (isFirstRun) {
        processed.add(r.id);
        continue;
      }

      try {
        await sendSms(r.phone, buildMessage(r));
        processed.add(r.id);
        saveProcessed(processed);
        log('✅ 발송: 예약 ' + r.id + ' / ' + r.name + ' (' + r.phone + ') / ' + r.date + ' ' + r.time);
      } catch (e) {
        log('예약 ' + r.id + ' 발송 오류: ' + e.message + ' (다음 주기에 재시도)');
        // 발송 실패 시 processed에 넣지 않아 다음 주기에 재시도
      }
    }

    saveProcessed(processed);
    if (isFirstRun) {
      log('기준선 등록 완료: 기존 예약 ' + processed.size + '건은 발송 대상에서 제외했습니다.');
    }
  } catch (e) {
    log('확인 중 오류: ' + e.message);
  } finally {
    await page.close();
  }
}

(async () => {
  if (!fs.existsSync(sessionPath)) {
    console.error('❌ 로그인 세션이 없습니다. 먼저 "로그인.bat"을 실행하세요.');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true }).catch(async () => {
    return await chromium.launch({ headless: true, channel: 'chrome' });
  });
  const context = await browser.newContext({ storageState: sessionPath });
  const processed = loadProcessed();

  const firstRun = !fs.existsSync(processedPath);
  if (firstRun) {
    log('첫 실행: 지금까지의 예약을 "발송 안 함" 기준선으로 등록합니다 (과거 예약엔 문자 안 감).');
  }
  log('감시 시작. ' + CONFIG.POLL_INTERVAL_SEC + '초마다 새 예약을 확인합니다. (이 창을 닫으면 멈춥니다)');

  let isFirst = firstRun;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await checkOnce(context, processed, isFirst);
    isFirst = false; // 이후부터는 실제 발송
    await new Promise((r) => setTimeout(r, CONFIG.POLL_INTERVAL_SEC * 1000));
  }
})();
