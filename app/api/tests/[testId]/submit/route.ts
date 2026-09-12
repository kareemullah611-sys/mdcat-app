import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { submitExam } from "@/lib/test-service";
import { guardMutation } from "@/lib/request-guard";
import { securityLogTestMutation } from "@/lib/security-log";
import { INPUT_LIMITS } from "@/lib/input-limits";

const submitSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string().min(1).max(INPUT_LIMITS.identifier),
      selectedOptionId: z.string().min(1).max(INPUT_LIMITS.identifier).nullable(),
      timeSpentSeconds: z.number().int().min(0).max(3_600).optional(),
    }).strict(),
  ).max(400),
}).strict();

type RouteContext = { params: Promise<{ testId: string }> };

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
  if (testId.length > INPUT_LIMITS.identifier) return NextResponse.json({ error: "Invalid test" }, { status: 400 });
  const body = await request.json().catch(() => null);
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const result = await submitExam(testId, session.user.id, parsed.data.answers);

  if (result.error) {
    // A weak connection can lose the successful response after the database
    // commit. Treat a retry as success so exam submission is idempotent.
    if (result.error === "ALREADY_SUBMITTED") {
      return NextResponse.json({ ok: true, testId, alreadySubmitted: true });
    }
    const status =
      result.error === "NOT_FOUND" ? 404 : result.error === "FORBIDDEN" ? 403 : 409;
    return NextResponse.json({ error: result.error }, { status });
  }
  securityLogTestMutation("submit", session.user.id, testId);

  return NextResponse.json({ ok: true, testId });
}
