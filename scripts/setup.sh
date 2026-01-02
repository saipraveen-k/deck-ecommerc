#!/bin/bash

# Deck E-Commerce Setup Script
echo "🚀 Setting up Deck E-Commerce Store..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Copy environment files
echo "📋 Setting up environment files..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Created .env file"
fi

if [ ! -f apps/backend/.env ]; then
    cp apps/backend/.env.example apps/backend/.env
    echo "✅ Created backend .env file"
fi

if [ ! -f apps/frontend/.env.local ]; then
    cp apps/frontend/.env.local.example apps/frontend/.env.local
    echo "✅ Created frontend .env.local file"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "🔧 Setting up backend..."
cd apps/backend
npm install

echo "🎨 Setting up frontend..."
cd ../frontend
npm install

cd ../..

# Start services
echo "🐳 Starting Docker services..."
docker-compose up -d postgres redis

echo "⏳ Waiting for services to be ready..."
sleep 10

# Setup backend database
echo "🗄️ Setting up backend database..."
cd apps/backend
npm run migrate
npm run seed
npm run user

echo "✅ Setup complete!"
echo ""
echo "🎉 Deck E-Commerce Store is ready!"
echo ""
echo "📱 Services:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:9000"
echo "   Admin:    http://localhost:9000/admin"
echo "   Database: localhost:5432"
echo "   Redis:    localhost:6379"
echo ""
echo "👤 Admin Login:"
echo "   Email:    admin@deckclothing.com"
echo "   Password: admin123"
echo ""
echo "🚀 To start the development servers:"
echo "   npm run dev"
echo ""
echo "🛑 To stop services:"
echo "   docker-compose down"
