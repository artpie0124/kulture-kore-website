@echo off
chcp 65001 >nul
title 스페이스클라우드 자동발송 - 구조확인
echo ============================================
echo   예약 페이지 구조를 저장합니다
echo ============================================
echo.
call node discover.js
pause
