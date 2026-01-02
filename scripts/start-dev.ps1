# Deck E-Commerce Development Startup Script (PowerShell)

Write-Host "🚀 Starting Deck E-Commerce Store Development..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Start frontend in background
Write-Host "🎨 Starting frontend..." -ForegroundColor Blue
$frontendJob = Start-Job -ScriptBlock {
    Set-Location $args[0]
    npm run dev
} -ArgumentList "$PWD\apps\frontend"

# Wait a moment for frontend to start
Start-Sleep -Seconds 3

# Check if frontend is running
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -TimeoutSec 5 -ErrorAction Stop
    Write-Host "✅ Frontend is running on http://localhost:3000" -ForegroundColor Green
} catch {
    Write-Host "⏳ Frontend starting up on http://localhost:3000" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Deck E-Commerce Development Environment is ready!" -ForegroundColor Green
Write-Host ""
Write-Host "📱 Services:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "🛠️  Development Commands:" -ForegroundColor Cyan
Write-Host "   Stop frontend: Stop-Job -Name Job1" -ForegroundColor White
Write-Host "   View logs: Receive-Job -Name Job1" -ForegroundColor White
Write-Host ""
Write-Host "📝 Note: Backend requires PostgreSQL and Redis services." -ForegroundColor Yellow
Write-Host "   Install Docker and run 'docker compose up -d postgres redis'" -ForegroundColor Yellow
Write-Host ""

# Keep the script running
Write-Host "Press Ctrl+C to stop all services..." -ForegroundColor Gray
try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
} finally {
    Write-Host "🛑 Stopping services..." -ForegroundColor Yellow
    Stop-Job -Name Job1
    Remove-Job -Name Job1
    Write-Host "✅ All services stopped." -ForegroundColor Green
}
