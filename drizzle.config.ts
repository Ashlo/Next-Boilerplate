import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';
import path from 'path';

// Explicitly load from .env.local

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

export default defineConfig({
  schema: "./configs/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
});