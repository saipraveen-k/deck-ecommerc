const modules = {
  eventBus: {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: process.env.REDIS_URL,
    },
  },
  cacheService: {
    resolve: "@medusajs/cache-redis",
    options: {
      redisUrl: process.env.REDIS_URL,
    },
  },
};

const plugins = [
  `medusa-fulfillment-manual`,
  {
    resolve: `medusa-payment-stripe`,
    options: {
      api_key: process.env.STRIPE_API_KEY,
      webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
      capture: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    },
  },
  {
    resolve: `medusa-file-s3`,
    options: {
      s3_url: process.env.S3_URL,
      bucket: process.env.S3_BUCKET,
      region: process.env.S3_REGION,
      access_key_id: process.env.AWS_ACCESS_KEY_ID,
      secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
      prefix: "deck-store",
      file_key_prefix: "uploads",
    },
  },
  {
    resolve: "@medusajs/admin",
    options: {
      serve: true,
      path: "/admin",
      autoRebuild: true,
      develop: {
        open: false,
      },
    },
  },
];

const projectConfig = {
  database_url: process.env.DATABASE_URL,
  database_type: "postgres",
  store_cors: process.env.STORE_URL || "http://localhost:3000",
  admin_cors: process.env.ADMIN_URL || "http://localhost:9000",
  jwt_secret: process.env.JWT_SECRET,
  cookie_secret: process.env.COOKIE_SECRET,
  redis_url: process.env.REDIS_URL,
};

module.exports = {
  projectConfig,
  plugins,
  modules,
};
