// ============================================================
//  1단계: 최초 1회 로그인 — 브라우저 창이 뜨면 직접 로그인하세요
//  (네이버/카카오/애플 무엇이든 평소처럼 로그인하면 됩니다)
//  로그인 성공 후 세션이 저장되어, 이후에는 자동으로 로그인 상태가 유지됩니다.
// ============================================================
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config');

(async () => {
  console.log('\n브라우저 창을 엽니다. 스페이스클라우드 호스트센터에 직접 로그인해 주세요.');
  console.log('로그인해서 예약 목록 화면이 보이면, 이 검은 창으로 돌아와 엔터 키를 누르세요.\n');

  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome' // PC에 설치된 크롬 사용 (없으면 아래 catch에서 재시도)
  }).catch(async () => {
    return await chromium.launch({ headless: false });
  });

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://partner.spacecloud.kr/login', { waitUntil: 'domcontentloaded' });

  // 사용자가 로그인 완료 후 엔터를 누를 때까지 대기
  await new Promise((resolve) => {
    process.stdin.resume();
    process.stdin.once('data', () => resolve());
  });

  // 세션(로그인 상태) 저장
  const sessionPath = path.join(__dirname, CONFIG.SESSION_FILE);
  await context.storageState({ path: sessionPath });
  console.log('\n✅ 로그인 세션을 저장했습니다: ' + sessionPath);
  console.log('이제 창을 닫아도 됩니다. 다음은 discover(구조 확인)를 실행하세요.\n');

  await browser.close();
  process.exit(0);
})();
