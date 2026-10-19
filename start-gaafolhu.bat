@echo off
cd /d "%~dp0"
echo Starting Gaafolhu on http://127.0.0.1:3003 ...
echo Keep this window open. Press Ctrl+C to stop.
"C:\Program Files\nodejs\npm.cmd" run dev -- -p 3003 --hostname 127.0.0.1
pause
