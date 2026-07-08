// ============================================================
//  3단계: 상시 감시 — 새 예약을 자동 감지하고 고객에게 문자 발송
//  (이 프로그램을 켜두면 POLL_INTERVAL_SEC 마다 예약을 확인합니다)
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

// 화면 텍스트에서 예약 정보 추출 (SPA DOM 변경에 강하도록 텍스트 기반)
function parseDetail(text) {
  const phoneMatch = text.match(/01[016789][-.\s]?\d{3,4}[-.\s]?\d{4}/);
  const phone = phoneMatch ? phoneMatch[0].replace(/[-.\s]/g, '') : null;

  const nameMatch =
    text.match(/예약자\s*(?:명|이름)?\s*[:：]?\s*([가-힣a-zA-Z]{2,10})/) ||
    text.match(/게스트\s*[:：]?\s*([가-힣a-zA-Z]{2,10})/);
  const name = nameMatch ? nameMatch[1].trim() : '고객';

  const dateMatch = text.match(
    /(\d{4}[./년-]\s?\d{1,2}[./월-]\s?\d{1,2}일?(?:\s?\([일월화수목금토]\))?)/
  );
  const date = dateMatch ? dateMatch[1].trim() : '';

  const timeMatch =
    text.match(/(\d{1,2}:\d{2}\s*[~\-–]\s*\d{1,2}:\d{2})/) ||
    text.match(/(\d{1,2}시\s*[~\-–]\s*\d{1,2}시)/);
  const time = timeMatch ? timeMatch[1].trim() : '';

  return { phone, name, date, time };
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

async function checkOnce(context, processed) {
  const page = await context.newPage();
  try {
    await page.goto(CONFIG.RESERVATION_LIST_URL, {
      waitUntil: 'networkidle',
      timeout: 60000
    });
    await page.waitForTimeout(3000);

    // 로그인 만료 감지
    if (/login/i.test(page.url())) {
      log('⚠️ 로그인이 만료되었습니다. "로그인.bat"을 다시 실행해 재로그인하세요.');
      return;
    }

    // 예약 상세 링크 수집 (예: /reservation/10262241)
    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href]'))
        .map((a) => a.getAttribute('href'))
        .filter((h) => h && /reservation\/\d+/i.test(h))
    );
    const ids = [
      ...new Set(
        links
          .map((h) => (h.match(/reservation\/(\d+)/i) || [])[1])
          .filter(Boolean)
      )
    ];

    if (ids.length === 0) {
      log('예약 링크를 찾지 못했습니다. (discover 결과로 선택자 보정이 필요할 수 있음)');
    }

    for (const id of ids) {
      if (processed.has(id)) continue; // 이미 처리한 예약

      const detailUrl = 'https://partner.spacecloud.kr/reservation/' + id;
      const dpage = await context.newPage();
      try {
        await dpage.goto(detailUrl, { waitUntil: 'networkidle', timeout: 60000 });
        await dpage.waitForTimeout(2500);
        const text = await dpage.evaluate(() => document.body.innerText);

        // 공간 필터
        if (CONFIG.SPACE_FILTER && !text.includes(CONFIG.SPACE_FILTER)) {
          processed.add(id);
          continue;
        }
        // 취소 예약 제외
        if (/취소|환불/.test(text) && !/예약\s*완료|예약이\s*완료|확정/.test(text)) {
          processed.add(id);
          continue;
        }

        const info = parseDetail(text);
        if (!info.phone) {
          log('예약 ' + id + ': 전화번호를 못 찾음 → 건너뜀(다음에 재시도 안 함). 수동 확인 필요.');
          // 번호를 못 찾으면 processed에 넣지 않고 남겨둘 수도 있으나,
          // 무한 반복을 막기 위해 기록하고 넘어감. 필요시 정책 조정.
          processed.add(id);
          continue;
        }

        await sendSms(info.phone, buildMessage(info));
        processed.add(id);
        saveProcessed(processed);
        log('✅ 발송: 예약 ' + id + ' / ' + info.name + ' (' + info.phone + ')');
      } catch (e) {
        log('예약 ' + id + ' 처리 오류: ' + e.message);
      } finally {
        await dpage.close();
      }
    }
    saveProcessed(processed);
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

  log('감시 시작. ' + CONFIG.POLL_INTERVAL_SEC + '초마다 새 예약을 확인합니다. (창을 닫으면 멈춥니다)');

  // 첫 실행 시, 지금까지의 기존 예약은 "이미 처리됨"으로 표시해 과거 예약에 문자가 가지 않게 함
  if (processed.size === 0 && fs.existsSync(processedPath) === false) {
    log('첫 실행: 기존 예약을 기준선으로 등록합니다 (과거 예약엔 문자 안 감).');
  }

  // 무한 루프
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await checkOnce(context, processed);
    await new Promise((r) => setTimeout(r, CONFIG.POLL_INTERVAL_SEC * 1000));
  }
})();
