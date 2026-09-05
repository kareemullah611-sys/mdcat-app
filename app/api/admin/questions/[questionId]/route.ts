import { NextResponse } from "next/server";
import { requireApiAdmin } from "@/lib/api-auth";
import { updateQuestionSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { validateQuestion, computeQualityScore } from "@/lib/validation";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ questionId: string }> },
) {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { questionId } = await params;
  const body = await request.json().catch(() => null);
  const parsed = updateQuestionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const existing = await prisma.question.findUnique({
    where: { id: questionId },
    include: { options: true },
  });
  if (!existing) return NextResponse.json({ error: "Question not found" }, { status: 404 });

  const data = parsed.data;

  // Build effective option set for validation/quality
  const options = data.options
    ? data.options
    : existing.options.map((o) => ({ text: o.text, isCorrect: o.isCorrect }));

  const validationIssues = validateQuestion({ questionText: data.questionText ?? existing.questionText, options });
  if (validationIssues.length > 0) {
    return NextResponse.json({ error: "Question is invalid", issues: validationIssues.map((i) => i.message) }, { status: 422 });
  }

  const qualityScore = computeQualityScore({ questionText: data.questionText ?? existing.questionText, options, explanation: data.explanation ?? existing.explanation });

  // Auto-publish edits per Phase 2 spec decision (§25+§26 merged)
  const status = data.status ?? (existing.status === "DRAFT" || existing.status === "DISABLED" ? "PUBLISHED" : existing.status);

  const result = await prisma.$transaction(async (tx) => {
    // Replace options if provided (preserves none → keeps existing)
    if (data.options) {
      await tx.questionOption.deleteMany({ where: { questionId } });
      await tx.questionOption.createMany({
        data: data.options.map((o, i) => ({ questionId, text: o.text, isCorrect: o.isCorrect, order: i })),
      });
    }

    const updated = await tx.question.update({
      where: { id: questionId },
      data: {
        ...(data.questionText !== undefined && { questionText: data.questionText }),
        ...(data.subjectId !== undefined && { subjectId: data.subjectId }),
        ...(data.boardId !== undefined && { boardId: data.boardId }),
        ...(data.classId !== undefined && { classId: data.classId }),
        ...(data.chapterId !== undefined && { chapterId: data.chapterId }),
        ...(data.topicId !== undefined && { topicId: data.topicId }),
        ...(data.questionType !== undefined && { questionType: data.questionType }),
        ...(data.difficulty !== undefined && { difficulty: data.difficulty }),
        ...(data.explanation !== undefined && { explanation: data.explanation }),
        ...(data.sourceType !== undefined && { sourceType: data.sourceType }),
        ...(data.sourceReference !== undefined && { sourceReference: data.sourceReference }),
        ...(data.mdcatRelevanceScore !== undefined && { mdcatRelevanceScore: data.mdcatRelevanceScore }),
        ...(data.duplicateOfId !== undefined && { duplicateOfId: data.duplicateOfId }),
        ...(data.issueReason !== undefined && { issueReason: data.issueReason }),
        status,
        qualityScore,
      },
      select: { id: true, status: true, qualityScore: true },
    });
    return updated;
  });

  return NextResponse.json(result);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ questionId: string }> },
) {
  const admin = await requireApiAdmin();
  if (!admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { questionId } = await params;
  const question = await prisma.question.findUnique({ where: { id: questionId }, select: { status: true } });
  if (!question) return NextResponse.json({ error: "Question not found" }, { status: 404 });
  if (question.status !== "DRAFT") {
    return NextResponse.json({ error: "Only DRAFT questions can be permanently deleted. Disable it instead." }, { status: 400 });
  }

  await prisma.question.delete({ where: { id: questionId } });
  return NextResponse.json({ ok: true });
}