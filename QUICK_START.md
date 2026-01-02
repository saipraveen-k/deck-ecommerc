# 🚀 Quick Start Guide - Deck E-Commerce Store

## Prerequisites

- Node.js 18+ 
- Docker & Docker Compose
- Git

## One-Command Setup

```bash
# Clone and setup
git clone <repository-url>
cd deck-ecommerce
chmod +x scripts/setup.sh
./scripts/setup.sh
```

## Manual Setup

### 1. Environment Configuration

```bash
# Root environment
cp .env.example .env

# Backend environment  
cp apps/backend/.env.example apps/backend/.env

# Frontend environment
cp apps/frontend/.env.local.example apps/frontend/.env.local
```

### 2. Install Dependencies

```bash
# Install workspace dependencies
npm install

# Install backend dependencies
cd apps/backend && npm install

# Install frontend dependencies  
cd ../frontend && npm install
```

### 3. Start Services

```bash
# Start database services
docker-compose up -d postgres redis

# Wait 10 seconds for services to be ready
sleep 10
```

### 4. Setup Backend

```bash
cd apps/backend

# Run migrations
npm run migrate

# Seed database with products
npm run seed

# Create admin user
npm run user
```

### 5. Start Development Servers

```bash
# From root directory
npm run dev
```

## Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:9000  
- **Admin Panel**: http://localhost:9000/admin
- **Database**: localhost:5432
- **Redis**: localhost:6379

## Admin Login

- **Email**: admin@deckclothing.com
- **Password**: admin123

## Development Commands

```bash
# Start all services
npm run dev

# Start frontend only
npm run dev:frontend

# Start backend only  
npm run dev:backend

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

## Environment Variables

### Required Variables

Update these in your `.env` files:

**Backend (.env):**
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string  
- `STRIPE_API_KEY` - Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- `JWT_SECRET` - JWT signing secret
- `COOKIE_SECRET` - Cookie signing secret

**Frontend (.env.local):**
- `NEXT_PUBLIC_MEDUSA_BACKEND_URL` - Backend URL
- `NEXT_PUBLIC_STRIPE_KEY` - Stripe publishable key
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key

## Production Deployment

### Frontend (Vercel)

```bash
cd apps/frontend
vercel --prod
```

### Backend (Railway/Render)

Deploy the Medusa backend with environment variables configured.

## Features Included

✅ **Core E-Commerce**
- Product catalog with variants
- Shopping cart & checkout
- Order management
- Customer accounts

✅ **Payment Processing**
- Stripe integration
- Multiple payment methods
- Webhook handling

✅ **Design System**
- Tailwind CSS styling
- Component library
- Responsive design
- Brand colors (Navy #0A2463, White #FFFFFF, Gold #D4AF37)

✅ **Admin Panel**
- Product management
- Order processing
- Customer management
- Analytics dashboard

✅ **Developer Experience**
- TypeScript throughout
- Hot reload development
- Docker development environment
- Monorepo structure

## Troubleshooting

### Database Connection Issues

```bash
# Reset database
docker-compose down -v
docker-compose up -d postgres redis
```

### Port Conflicts

Check if ports 3000, 9000, 5432, 6379 are available.

### Build Errors

```bash
# Clear node_modules
npm run clean
npm install
```

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review the documentation
3. Check logs in Docker containers
4. Verify environment variables

---

🎉 **Your Deck E-Commerce Store is ready!**
