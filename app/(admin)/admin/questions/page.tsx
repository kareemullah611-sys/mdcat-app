import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { Card, PageHeader, Badge } from "@/components/ui";
import { QuestionCreateForm } from "@/components/admin/question-create-form";

export default async function AdminQuestionsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  await requireAdmin();
  const { chapter } = await searchParams;

  const [boards, classes, subjects, questions, questionCount] = await Promise.all([
    prisma.board.findMany({ orderBy: { name: "asc" } }),
    prisma.schoolClass.findMany({ orderBy: { grade: "asc" } }),
    prisma.subject.findMany({ orderBy: { name: "asc" } }),
    prisma.question.findMany({
      orderBy: { createdAt: "desc" },
      take: 30,
      include: { subject: true, board: true, chapter: true, _count: { select: { options: true } } },
    }),
    prisma.question.count(),
  ]);

  return (
    <div>
      <PageHeader title="Questions" subtitle={`${questionCount} total. Add validated MCQs — these instantly power practice and exams.`} />

      <Card>
        <h2 className="mb-4 font-semibold">Add question</h2>
        <QuestionCreateForm boards={boards} classes={classes} subjects={subjects} defaultChapterId={chapter} />
      </Card>

      <div className="mt-6">
        {questions.length === 0 ? (
          <p className="text-sm text-slate-500">No questions yet.</p>
        ) : (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {questions.map((q) => (
              <li key={q.id} className="px-4 py-3">
                <p className="font-medium text-slate-800">{q.questionText}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                  <Badge>{q.subject.name}</Badge>
                  {q.board ? <Badge tone="blue">{q.board.name.split(" / ")[0]}</Badge> : null}
                  {q.chapter ? <span className="text-slate-500">{q.chapter.title}</span> : null}
                  <span className="text-slate-400">{q.difficulty} · {q.sourceType} · {q.mdcatRelevanceScore}r</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}