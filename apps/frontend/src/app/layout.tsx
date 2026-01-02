import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Deck Clothing - Premium Fashion for Modern Professionals',
    template: '%s | Deck Clothing'
  },
  description: 'Discover premium clothing for modern professionals. Shop our collection of minimalist luxury fashion including shirts, pants, blazers, and accessories.',
  keywords: ['premium clothing', 'luxury fashion', 'minimalist style', 'professional attire', 'deck clothing'],
  authors: [{ name: 'Deck Clothing' }],
  creator: 'Deck Clothing',
  publisher: 'Deck Clothing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_STORE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_STORE_URL || 'http://localhost:3000',
    title: 'Deck Clothing - Premium Fashion for Modern Professionals',
    description: 'Discover premium clothing for modern professionals. Shop our collection of minimalist luxury fashion.',
    siteName: 'Deck Clothing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deck Clothing - Premium Fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deck Clothing - Premium Fashion for Modern Professionals',
    description: 'Discover premium clothing for modern professionals. Shop our collection of minimalist luxury fashion.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
