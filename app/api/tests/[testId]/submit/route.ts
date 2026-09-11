import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { submitExam } from "@/lib/test-service";
import { guardMutation } from "@/lib/request-guard";

const submitSchema = z.object({
  answers: z.array(
    z.object({
      questionId: z.string().min(1),
      selectedOptionId: z.string().nullable(),
      timeSpentSeconds: z.number().int().min(0).max(3_600).optional(),
    }),
  ).max(400),
});

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
  const body = await request.json().catch(() => null);
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const result = await submitExam(testId, session.user.id, parsed.data.answers);

  if (result.error) {
    const status =
      result.error === "NOT_FOUND" ? 404 : result.error === "FORBIDDEN" ? 403 : 409;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ ok: true, testId });
}