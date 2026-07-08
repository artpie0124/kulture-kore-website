@echo off
chcp 65001 >nul
title 스페이스클라우드 자동발송 - 자동시작 등록
echo ============================================
echo   PC를 켤 때마다 자동으로 감시가 시작되도록
echo   등록합니다. (이 파일은 한 번만 실행하면 됩니다)
echo ============================================
echo.

set "VBS=%~dp0_숨김실행.vbs"
set "STARTUP=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"

REM 창을 숨긴 채로 _실행루프.bat 을 돌리는 VBS 도우미 생성
>"%VBS%" echo Set ws = CreateObject("WScript.Shell")
>>"%VBS%" echo ws.Run """%~dp0_실행루프.bat""", 0, False

REM 시작프로그램 폴더에 등록
copy /Y "%VBS%" "%STARTUP%\스페이스클라우드자동발송.vbs" >nul

if exist "%STARTUP%\스페이스클라우드자동발송.vbs" (
  echo ✅ 등록 완료!
  echo.
  echo   - 이제 PC를 켜면 창 없이 백그라운드에서 자동 감시가 시작됩니다.
  echo   - 프로그램이 멈추면 10초 뒤 스스로 다시 시작합니다.
  echo   - 발송/오류 기록은 이 폴더의 watch_log.txt 파일에 쌓입니다.
  echo.
  echo   지금 바로 시작하려면 "_숨김실행.vbs" 를 더블클릭하거나 PC를 재부팅하세요.
  echo.
  echo   ※ 해제하려면: 시작프로그램 폴더의 "스페이스클라우드자동발송.vbs" 삭제
  echo      ( 실행: 윈도우키+R -^> shell:startup 입력 )
) else (
  echo [오류] 등록 실패. 이 파일을 우클릭 -^> "관리자 권한으로 실행" 해보세요.
)
echo.
pause
