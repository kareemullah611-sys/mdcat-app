import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { recordPracticeAnswer } from "@/lib/test-service";
import { guardMutation } from "@/lib/request-guard";
import { securityLogTestMutation } from "@/lib/security-log";
import { INPUT_LIMITS } from "@/lib/input-limits";

const answerSchema = z.object({
  questionId: z.string().min(1).max(INPUT_LIMITS.identifier),
  optionId: z.string().min(1).max(INPUT_LIMITS.identifier).nullable(),
  timeSpentSeconds: z.number().int().min(0).max(3_600).optional(),
}).strict();

type RouteContext = { params: Promise<{ testId: string }> };

export async function POST(request: Request, context: RouteContext) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const guarded = guardMutation(request, "ANSWER", session.user.id);
  if (!guarded.ok) {
    return NextResponse.json(
      { error: guarded.status === 403 ? "Forbidden" : "Too many requests" },
      { status: guarded.status, headers: { "Retry-After": String(guarded.retryAfterSeconds) } },
    );
  }

  const { testId } = await context.params;
  if (testId.length > INPUT_LIMITS.identifier) return NextResponse.json({ error: "Invalid test" }, { status: 400 });
  const body = await request.json().catch(() => null);
  const parsed = answerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid answer" }, { status: 400 });
  }

  const result = await recordPracticeAnswer(
    testId,
    session.user.id,
    parsed.data.questionId,
    parsed.data.optionId,
    parsed.data.timeSpentSeconds,
  );

  if (!result) {
    return NextResponse.json({ error: "Not found or not a practice test" }, { status: 404 });
  }
  securityLogTestMutation("answer", session.user.id, testId);

  return NextResponse.json(result);
}
