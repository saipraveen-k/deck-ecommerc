import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: process.env.STORE_URL || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Mock products endpoint
app.get('/store/products', (req, res) => {
  const mockProducts = [
    {
      id: 'prod_1',
      title: 'Classic Oxford Shirt',
      handle: 'classic-oxford-shirt',
      description: 'A timeless classic crafted from premium cotton with a perfect fit for any professional setting.',
      status: 'published',
      variants: [
        {
          id: 'variant_1',
          title: 'Classic Oxford - White - M',
          sku: 'OXF-WHT-M',
          prices: [{ currency_code: 'usd', amount: 8900 }],
          inventory_quantity: 100,
          options: { size: 'M', color: 'White' },
        },
        {
          id: 'variant_2',
          title: 'Classic Oxford - Navy - L',
          sku: 'OXF-NVY-L',
          prices: [{ currency_code: 'usd', amount: 8900 }],
          inventory_quantity: 100,
          options: { size: 'L', color: 'Navy' },
        },
      ],
      tags: ['men', 'shirts', 'formal', 'cotton'],
      images: [
        { url: '/products/oxford-shirt-1.jpg' },
        { url: '/products/oxford-shirt-2.jpg' },
      ],
    },
    {
      id: 'prod_2',
      title: 'Tailored Chinos',
      handle: 'tailored-chinos',
      description: 'Perfectly tailored chinos that blend comfort with professional style.',
      status: 'published',
      variants: [
        {
          id: 'variant_3',
          title: 'Chinos - Khaki - 32',
          sku: 'CHN-KHK-32',
          prices: [{ currency_code: 'usd', amount: 9900 }],
          inventory_quantity: 80,
          options: { size: '32', color: 'Khaki' },
        },
        {
          id: 'variant_4',
          title: 'Chinos - Navy - 34',
          sku: 'CHN-NVY-34',
          prices: [{ currency_code: 'usd', amount: 9900 }],
          inventory_quantity: 80,
          options: { size: '34', color: 'Navy' },
        },
      ],
      tags: ['men', 'pants', 'casual', 'cotton'],
      images: [
        { url: '/products/chinos-1.jpg' },
        { url: '/products/chinos-2.jpg' },
      ],
    },
    {
      id: 'prod_3',
      title: 'Silk Blouse',
      handle: 'silk-blouse',
      description: 'Elegant silk blouse perfect for professional and evening wear.',
      status: 'published',
      variants: [
        {
          id: 'variant_5',
          title: 'Blouse - Ivory - S',
          sku: 'BLU-IVR-S',
          prices: [{ currency_code: 'usd', amount: 11900 }],
          inventory_quantity: 70,
          options: { size: 'S', color: 'Ivory' },
        },
        {
          id: 'variant_6',
          title: 'Blouse - Black - M',
          sku: 'BLU-BLK-M',
          prices: [{ currency_code: 'usd', amount: 11900 }],
          inventory_quantity: 70,
          options: { size: 'M', color: 'Black' },
        },
      ],
      tags: ['women', 'tops', 'silk', 'elegant'],
      images: [
        { url: '/products/blouse-1.jpg' },
        { url: '/products/blouse-2.jpg' },
      ],
    },
  ];

  res.json({ products: mockProducts });
});

// Mock collections endpoint
app.get('/store/collections', (req, res) => {
  const mockCollections = [
    {
      id: 'col_1',
      title: "Men's Collection",
      handle: 'mens',
      products: ['prod_1', 'prod_2'],
    },
    {
      id: 'col_2',
      title: "Women's Collection",
      handle: 'womens',
      products: ['prod_3'],
    },
    {
      id: 'col_3',
      title: 'Accessories',
      handle: 'accessories',
      products: [],
    },
  ];

  res.json({ collections: mockCollections });
});

// Mock cart endpoint
app.post('/store/carts', (req, res) => {
  const cart = {
    id: 'cart_' + Math.random().toString(36).substr(2, 9),
    items: [],
    region: {
      id: 'reg_1',
      name: 'Default Region',
      currency_code: 'usd',
    },
  };
  res.json({ cart });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Deck Backend Server running on http://localhost:${PORT}`);
  console.log(`📱 API available at http://localhost:${PORT}/store`);
  console.log(`❤️  Health check at http://localhost:${PORT}/health`);
});

export default app;
