import { MedusaContainer } from "@medusajs/medusa";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

export default async function containerLoader(container: MedusaContainer): Promise<void> {
  // Security middleware
  container.register("security", {
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
  });

  // CORS configuration
  container.register("cors", {
    cors: cors({
      origin: [
        process.env.STORE_URL || "http://localhost:3000",
        process.env.ADMIN_URL || "http://localhost:9000",
      ],
      credentials: true,
    }),
  });

  // Compression
  container.register("compression", {
    compression: compression(),
  });
}
