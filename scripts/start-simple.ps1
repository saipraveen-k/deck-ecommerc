# Deck E-Commerce Simple Startup Script (PowerShell)

Write-Host "🚀 Starting Deck E-Commerce Store (Simple Mode)..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Start backend in background
Write-Host "🔧 Starting backend..." -ForegroundColor Blue
$backendJob = Start-Job -ScriptBlock {
    Set-Location $args[0]
    npm run dev
} -ArgumentList "$PWD\apps\backend"

# Wait for backend to start
Start-Sleep -Seconds 5

# Check if backend is running
try {
    $response = Invoke-WebRequest -Uri "http://localhost:9000/health" -TimeoutSec 5 -ErrorAction Stop
    Write-Host "✅ Backend is running on http://localhost:9000" -ForegroundColor Green
} catch {
    Write-Host "⏳ Backend starting up on http://localhost:9000" -ForegroundColor Yellow
}

# Start frontend in background
Write-Host "🎨 Starting frontend..." -ForegroundColor Blue
$frontendJob = Start-Job -ScriptBlock {
    Set-Location $args[0]
    npm run dev
} -ArgumentList "$PWD\apps\frontend"

# Wait for frontend to start
Start-Sleep -Seconds 8

# Check if frontend is running
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -TimeoutSec 5 -ErrorAction Stop
    Write-Host "✅ Frontend is running on http://localhost:3000" -ForegroundColor Green
} catch {
    Write-Host "⏳ Frontend starting up on http://localhost:3000" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Deck E-Commerce Store is ready!" -ForegroundColor Green
Write-Host ""
Write-Host "📱 Services:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "   Backend:  http://localhost:9000" -ForegroundColor White
Write-Host "   API:     http://localhost:9000/store" -ForegroundColor White
Write-Host "   Health:  http://localhost:9000/health" -ForegroundColor White
Write-Host ""
Write-Host "🛠️  Development Commands:" -ForegroundColor Cyan
Write-Host "   Stop all:     Ctrl+C" -ForegroundColor White
Write-Host "   View logs:    Receive-Job -Name Job1 (Backend)" -ForegroundColor White
Write-Host "   View logs:    Receive-Job -Name Job2 (Frontend)" -ForegroundColor White
Write-Host ""
Write-Host "📝 Features Available:" -ForegroundColor Cyan
Write-Host "   ✅ Product catalog" -ForegroundColor Green
Write-Host "   ✅ Shopping cart" -ForegroundColor Green
Write-Host "   ✅ Responsive design" -ForegroundColor Green
Write-Host "   ✅ Brand styling" -ForegroundColor Green
Write-Host ""
Write-Host "⚠️  Note: This is a demo mode with mock data." -ForegroundColor Yellow
Write-Host "   For full functionality, set up PostgreSQL and Redis." -ForegroundColor Yellow
Write-Host ""

# Keep the script running
Write-Host "Press Ctrl+C to stop all services..." -ForegroundColor Gray
try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
} finally {
    Write-Host "🛑 Stopping services..." -ForegroundColor Yellow
    Stop-Job -Name Job1, Job2
    Remove-Job -Name Job1, Job2
    Write-Host "✅ All services stopped." -ForegroundColor Green
}
