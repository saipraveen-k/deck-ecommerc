import { MedusaContainer } from "@medusajs/medusa";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { asValue } from "awilix";

export default async function containerLoader(container: MedusaContainer): Promise<void> {
  // Security middleware
  container.register("security", asValue({
    helmet: helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
          imgSrc: ["'self'", "data:", "https:"],
          scriptSrc: ["'self'"],
          connectSrc: ["'self'", "https://api.stripe.com"],
        },
      },
    }),
  }));

  // CORS configuration
  container.register("cors", asValue({
    cors: cors({
      origin: [
        process.env.STORE_URL || "http://localhost:3000",
        process.env.ADMIN_URL || "http://localhost:9000",
      ],
      credentials: true,
    }),
  }));

  // Compression
  container.register("compression", asValue({
    compression: compression(),
  }));
}
