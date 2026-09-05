import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { PageHeader, Card, Badge } from "@/components/ui";
import { QuestionEditForm } from "@/components/admin/question-edit-form";

export default async function EditQuestionPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;

  const question = await prisma.question.findUnique({
    where: { id },
    include: {
      options: { orderBy: { order: "asc" } },
      subject: true,
      board: true,
      chapter: true,
      duplicateOf: { select: { questionText: true } },
    },
  });
  if (!question) notFound();

  const [boards, classes, subjects, chapters, topics] = await Promise.all([
    prisma.board.findMany({ orderBy: { name: "asc" } }),
    prisma.schoolClass.findMany({ orderBy: { grade: "asc" } }),
    prisma.subject.findMany({ orderBy: { name: "asc" } }),
    prisma.chapter.findMany({
      where: question.subjectId ? { book: { subjectId: question.subjectId } } : {},
      orderBy: { title: "asc" },
    }),
    prisma.topic.findMany({
      where: question.chapterId ? { chapterId: question.chapterId } : {},
      orderBy: { title: "asc" },
    }),
  ]);

  const statusTone =
    question.status === "PUBLISHED" ? "green" :
    question.status === "DRAFT" ? "amber" :
    question.status === "DISABLED" ? "red" : "slate";

  return (
    <div>
      <PageHeader title="Edit question" subtitle={`${question.subject?.name ?? ""} · ${question.board?.name.split(" / ")[0] ?? "—"} · ${question.status}`} />

      <Card className="mb-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <Badge tone={statusTone as "green"}>{question.status}</Badge>
          <span>Quality {question.qualityScore}/100</span>
          <span>· {question.questionType}</span>
          <span>· {question.difficulty}</span>
          {question.chapter ? <span>· {question.chapter.title}</span> : null}
          {question.duplicateOf ? <Badge tone="blue">Duplicate of: {question.duplicateOf.questionText.slice(0, 50)}…</Badge> : null}
        </div>
      </Card>

      <Card>
        <QuestionEditForm
          question={{
            id: question.id,
            questionText: question.questionText,
            subjectId: question.subjectId,
            boardId: question.boardId,
            classId: question.classId,
            chapterId: question.chapterId,
            topicId: question.topicId,
            questionType: question.questionType,
            difficulty: question.difficulty,
            explanation: question.explanation,
            sourceType: question.sourceType,
            sourceReference: question.sourceReference,
            mdcatRelevanceScore: question.mdcatRelevanceScore,
            qualityScore: question.qualityScore,
            status: question.status,
            duplicateOfId: question.duplicateOfId,
            issueReason: question.issueReason,
            options: question.options.map((o) => ({ text: o.text, isCorrect: o.isCorrect })),
            duplicateLabel: question.duplicateOf?.questionText.slice(0, 60) ?? null,
          }}
          boards={boards}
          classes={classes}
          subjects={subjects}
          chapters={chapters}
          topics={topics}
        />
      </Card>
    </div>
  );
}