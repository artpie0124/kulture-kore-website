// ============================================================
//  2단계: 구조 확인 — 예약 목록/상세 페이지를 열어 화면과 데이터를
//  파일로 저장합니다. 이 결과를 개발자(Claude)에게 보내면,
//  예약자 이름/전화번호를 정확히 뽑아내는 코드를 완성합니다.
// ============================================================
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config');

(async () => {
  const sessionPath = path.join(__dirname, CONFIG.SESSION_FILE);
  if (!fs.existsSync(sessionPath)) {
    console.error('❌ 로그인 세션이 없습니다. 먼저 "로그인.bat"(login)을 실행하세요.');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true }).catch(async () => {
    return await chromium.launch({ headless: true, channel: 'chrome' });
  });
  const context = await browser.newContext({ storageState: sessionPath });
  const page = await context.newPage();

  console.log('예약 목록 페이지를 엽니다...');
  await page.goto(CONFIG.RESERVATION_LIST_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(4000); // SPA 렌더링 대기

  // 화면 스크린샷 + 렌더링된 텍스트 + HTML 저장
  await page.screenshot({ path: path.join(__dirname, 'discover_list.png'), fullPage: true });

  const bodyText = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync(path.join(__dirname, 'discover_list_text.txt'), bodyText, 'utf8');

  const html = await page.content();
  fs.writeFileSync(path.join(__dirname, 'discover_list.html'), html, 'utf8');

  // 예약 상세로 이어지는 링크 후보 수집
  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a[href]'))
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && /reservation/i.test(h))
  );
  fs.writeFileSync(
    path.join(__dirname, 'discover_links.txt'),
    JSON.stringify([...new Set(links)], null, 2),
    'utf8'
  );

  console.log('\n로그인 상태 확인: 현재 URL = ' + page.url());
  console.log('저장 완료:');
  console.log('  - discover_list.png (화면 캡처)');
  console.log('  - discover_list_text.txt (화면 텍스트)');
  console.log('  - discover_list.html (전체 HTML)');
  console.log('  - discover_links.txt (예약 상세 링크 후보)');
  console.log('\n※ 이 파일들 중 discover_list_text.txt 와 discover_links.txt 내용을');
  console.log('   개발자에게 보내주세요. 개인정보(고객 번호)가 있으면 가려서 보내셔도 됩니다.\n');

  await browser.close();
  process.exit(0);
})();
