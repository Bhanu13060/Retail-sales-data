@echo off
echo Generating RetailEdge Sales Report and KPI Summary...
"%~dp0.venv\Scripts\python" "%~dp0build_report.py"
if %errorlevel% neq 0 (
    echo Error generating reports. Make sure Python is working.
    pause
    exit /b %errorlevel%
)

echo.
echo Opening detailed KPI Report in Notepad...
start notepad "%~dp0RetailEdge_KPI_Report.txt"

echo.
echo Opening Excel Sales Report...
start "" "%~dp0RetailEdge_Sales_Report.xlsx"

echo.
echo Starting Interactive Dashboard...
where npm >nul 2>nul
if %errorlevel% equ 0 (
    echo Node.js/npm detected. Starting dashboard development server...
    echo A new terminal window will open (it may take a moment to install npm dependencies).
    start cmd /k "cd /d "%~dp0dashboard-app" && npm install --no-audit --no-fund --legacy-peer-deps && npm run dev -- --open"
) else (
    echo Node.js/npm not detected.
    echo Running fallback Python web server to view the pre-built dashboard...
    echo.
    echo Opening dashboard in your browser: http://localhost:3000
    start http://localhost:3000
    start "RetailEdge Dashboard Server" cmd /k ""%~dp0.venv\Scripts\python" -m http.server 3000 --directory "%~dp0dashboard-app\dist""
)

echo.
echo Done!
pause
