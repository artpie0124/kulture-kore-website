@echo off
chcp 65001 >nul
REM 감시 프로그램을 실행하고, 혹시 멈추면 10초 뒤 자동으로 다시 시작합니다.
cd /d "%~dp0"
:loop
echo [%date% %time%] watch.js 시작 >> watch_log.txt
node watch.js >> watch_log.txt 2>&1
echo [%date% %time%] watch.js 종료됨 — 10초 후 재시작 >> watch_log.txt
timeout /t 10 /nobreak >nul
goto loop
