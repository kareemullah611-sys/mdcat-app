import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DB_TIMEOUT_MS = 3000;

/**
 * Liveness/readiness probe used by the Railway healthcheck. Performs a light,
 * constant SQL round-trip (no user input) so it stays cheap but detects a dead
 * database. Always answers 200 so the platform never pulls a healthy instance
 * over a transient hiccup; DB state is reported in the body.
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
    // No secrets or PII in a health probe.
    console.error("health: db ping failed", error instanceof Error ? error.message : "unknown");
  }
  return Response.json(
    {
      status: db === "up" ? "ok" : "degraded",
      db,
      uptime: Math.round(process.uptime()),
    },
    { status: 200 },
  );
}