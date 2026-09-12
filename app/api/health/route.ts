import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DB_TIMEOUT_MS = 3000;

/**
 * Railway readiness probe. Returns 200 "ok" only when the database is
 * reachable, and 503 when it is not, so a dead/misconfigured Postgres takes
 * the instance out of rotation instead of happily serving 200 on a broken
 * stack. Body is deliberately secret-free (no SQL errors, no credentials) and
 * never echoes user input.
 */
export async function GET() {
  let db: "up" | "down" = "down";
  try {
    await Promise.race([
      prisma.$queryRaw`SELECT 1`,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("db ping timed out")), DB_TIMEOUT_MS),
      ),
    ]);
    db = "up";
  } catch (error) {
    // Log server-side only; never leak the driver message to the probe body.
    console.error("health: db ping failed", error instanceof Error ? error.message : "unknown");
  }
  return Response.json(
    {
      status: db === "up" ? "ok" : "degraded",
      db,
      uptime: Math.round(process.uptime()),
    },
    { status: db === "up" ? 200 : 503 },
  );
}