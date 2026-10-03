import "dotenv/config";
import path from "node:path";
import { defineConfig } from "prisma/config";

/**
 * Prisma CLI configuration (replaces the deprecated `package.json#prisma`
 * block, which Prisma 7 removes).
 *
 * `dotenv/config` is imported first because a config file disables Prisma's
 * automatic `.env` loading, and `prisma/schema.prisma` still resolves
 * `env("DATABASE_URL")`. It is a no-op in production, where the platform
 * supplies `DATABASE_URL` as a real environment variable and there is no `.env`.
 *
 * NOTE: `prisma.config.ts` must be copied into the runtime image — the
 * Dockerfile's runner stage does not copy the repository root wholesale.
 */
export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "tsx prisma/seed.ts",
  },
});