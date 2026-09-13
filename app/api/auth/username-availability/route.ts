import { prisma } from "@/lib/prisma";
import { guardRead, rateLimitHeaders } from "@/lib/request-guard";
import { normalizeUsername, RESERVED_USERNAMES, usernameValidationError } from "@/lib/username";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const guarded = guardRead(request, "USERNAME_AVAILABILITY");
  if (!guarded.ok) {
    return Response.json(
      { available: false, reason: "rate_limited" },
      { status: 429, headers: rateLimitHeaders(guarded.retryAfterSeconds) },
    );
  }

  const rawUsername = new URL(request.url).searchParams.get("username");
  const validationMessage = usernameValidationError(rawUsername);
  if (validationMessage) {
    const normalized = typeof rawUsername === "string" ? normalizeUsername(rawUsername) : "";
    return Response.json(
      { available: false, reason: RESERVED_USERNAMES.has(normalized) ? "reserved" : "invalid" },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const normalized = normalizeUsername(rawUsername!);
  const existing = await prisma.user.findFirst({ where: { username: normalized }, select: { id: true } });
  return Response.json(
    existing ? { available: false, reason: "taken" } : { available: true },
    { headers: { "Cache-Control": "no-store" } },
  );
}
