@echo off
chcp 65001 >nul
title 스페이스클라우드 자동발송 - 설치
echo ============================================
echo   설치를 시작합니다 (최초 1회만)
echo ============================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo [오류] Node.js가 설치되어 있지 않습니다.
  echo   https://nodejs.org 에서 LTS 버전을 먼저 설치한 뒤 이 파일을 다시 실행하세요.
  echo.
  pause
  exit /b 1
)
echo Node.js 확인됨. 필요한 프로그램을 내려받습니다...
call npm install
echo.
echo 브라우저 구성요소를 내려받습니다...
call npx playwright install chromium
echo.
echo ✅ 설치 완료! 다음으로 "로그인.bat" 을 실행하세요.
echo.
pause
