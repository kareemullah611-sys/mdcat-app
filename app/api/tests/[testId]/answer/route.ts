import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { recordPracticeAnswer } from "@/lib/test-service";

const answerSchema = z.object({
  questionId: z.string().min(1),
  optionId: z.string().nullable(),
  timeSpentSeconds: z.number().int().min(0).optional(),
});

type RouteContext = { params: Promise<{ testId: string }> };

export async function POST(request: Request, context: RouteContext) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { testId } = await context.params;
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

  return NextResponse.json(result);
}