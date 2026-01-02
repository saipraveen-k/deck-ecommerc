# Deck E-Commerce Store

A premium clothing brand e-commerce store built with modern technologies.

## 🏗️ Architecture

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, and Shadcn/UI
- **Backend**: Medusa.js headless e-commerce platform
- **Database**: PostgreSQL with Redis for caching
- **Payments**: Stripe integration
- **Authentication**: Clerk.dev
- **Storage**: AWS S3 for media files
- **Email**: Resend for transactional emails

## 🎨 Brand Identity

- **Brand**: Deck Clothing
- **Colors**: Navy Blue (#0A2463), White (#FFFFFF), Gold (#D4AF37)
- **Target Audience**: 25-45 year old professionals
- **Style**: Minimalist luxury, clean, premium feel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- PostgreSQL client (optional)

### Environment Setup

1. Clone the repository
2. Copy environment files:
   ```bash
   cp .env.example .env
   ```

3. Start development environment:
   ```bash
   docker-compose up -d
   npm run dev
   ```

### Services

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:9000
- **Admin**: http://localhost:9000/admin
- **Database**: localhost:5432
- **Redis**: localhost:6379

## 📁 Project Structure

```
deck-ecommerce/
├── apps/
│   ├── frontend/          # Next.js frontend application
│   └── backend/           # Medusa.js backend
├── packages/
│   └── ui/               # Shared UI components
├── docker-compose.yml    # Development environment
├── package.json         # Workspace configuration
└── README.md
```

## 🛠️ Development

### Installing Dependencies

```bash
npm install
```

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
```

### Code Quality

```bash
npm run lint
npm run type-check
```

## 🚀 Deployment

### Frontend (Vercel)

```bash
cd apps/frontend
vercel --prod
```

### Backend (Railway/Render)

Deploy the Medusa backend with environment variables configured.

## 📧 Support

For support and questions, please contact the development team.

## 📄 License

This project is proprietary and confidential.
