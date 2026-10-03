import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { finishPracticeSession } from "@/lib/test-service";
import { guardMutation } from "@/lib/request-guard";
import { securityLogTestMutation } from "@/lib/security-log";
import { INPUT_LIMITS } from "@/lib/input-limits";

type RouteContext = { params: Promise<{ testId: string }> };

/**
 * Complete a practice session.
 *
 * Practice logs each answer as it is given, so finishing only aggregates the
 * stored snapshot (see `finishPracticeSession`). Idempotent: a retry after a
 * dropped response succeeds rather than double-counting.
 */
export async function POST(request: Request, context: RouteContext) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const guarded = guardMutation(request, "SUBMIT", session.user.id);
  if (!guarded.ok) {
    return NextResponse.json(
      { error: guarded.status === 403 ? "Forbidden" : "Too many requests" },
      { status: guarded.status, headers: { "Retry-After": String(guarded.retryAfterSeconds) } },
    );
  }

  const { testId } = await context.params;
  if (testId.length > INPUT_LIMITS.identifier) {
    return NextResponse.json({ error: "Invalid test" }, { status: 400 });
  }

  const result = await finishPracticeSession(testId, session.user.id);
  if ("error" in result) {
    const status = result.error === "NOT_FOUND" ? 404 : result.error === "FORBIDDEN" ? 403 : 409;
    return NextResponse.json({ error: "Could not finish this practice session." }, { status });
  }

  securityLogTestMutation("finish", session.user.id, testId);
  return NextResponse.json({ ok: true, testId, score: result.score, alreadyFinished: result.alreadyFinished });
}
