-- Initialize Deck Clothing Store Database
-- This script runs when PostgreSQL container starts

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types if needed
-- These will be created by Medusa migrations automatically

-- Set timezone
SET timezone = 'UTC';

-- Create indexes for better performance (will be created by Medusa)
-- These are placeholders for reference

COMMIT;
