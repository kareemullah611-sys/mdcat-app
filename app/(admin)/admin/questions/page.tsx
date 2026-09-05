import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { Card, PageHeader, Badge } from "@/components/ui";
import { QuestionCreateForm } from "@/components/admin/question-create-form";
import { QuestionRowActions } from "@/components/admin/question-row-actions";
import { QUESTION_STATUS } from "@/lib/constants";

const STATUS_TONE: Record<string, "green" | "amber" | "red" | "slate" | "blue"> = {
  PUBLISHED: "green",
  VALIDATED: "blue",
  DRAFT: "amber",
  DISABLED: "red",
  ARCHIVED: "slate",
};

export default async function AdminQuestionsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  await requireAdmin();
  const { chapter, status, q } = await searchParams;

  const activeStatus = status && QUESTION_STATUS.includes(status as (typeof QUESTION_STATUS)[number]) ? status : undefined;

  const [boards, classes, subjects, questions, questionCount, statusCounts] = await Promise.all([
    prisma.board.findMany({ orderBy: { name: "asc" } }),
    prisma.schoolClass.findMany({ orderBy: { grade: "asc" } }),
    prisma.subject.findMany({ orderBy: { name: "asc" } }),
    prisma.question.findMany({
      where: {
        ...(activeStatus ? { status: activeStatus } : {}),
        ...(q ? { questionText: { contains: q, mode: "insensitive" } } : {}),
      },
      orderBy: { updatedAt: "desc" },
      take: 100,
      include: {
        subject: true,
        board: true,
        chapter: true,
        _count: { select: { options: true } },
      },
    }),
    prisma.question.count(),
    prisma.question.groupBy({ by: ["status"], _count: true }),
  ]);

  const countByStatus = Object.fromEntries(statusCounts.map((s) => [s.status, s._count]));

  return (
    <div>
      <PageHeader title="Questions" subtitle={`${questionCount} total. Validated MCQs instantly power practice and exams.`} />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Link
          href="/admin/questions"
          className={`rounded-full px-3 py-1 text-xs font-semibold ${!activeStatus ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
        >
          All ({questionCount})
        </Link>
        {QUESTION_STATUS.map((s) => (
          <Link
            key={s}
            href={s === activeStatus ? "/admin/questions" : `/admin/questions?status=${s}`}
            className={`rounded-full px-3 py-1 text-xs font-semibold ${s === activeStatus ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          >
            {s} ({countByStatus[s] ?? 0})
          </Link>
        ))}
        <Link
          href="/admin/questions/import"
          className="ml-auto rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
        >
          Import from CSV
        </Link>
      </div>

      <Card>
        <h2 className="mb-4 font-semibold">Add question</h2>
        <QuestionCreateForm boards={boards} classes={classes} subjects={subjects} defaultChapterId={chapter} />
      </Card>

      <div className="mt-6">
        {questions.length === 0 ? (
          <p className="text-sm text-slate-500">No questions match. Try another filter or add one above.</p>
        ) : (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {questions.map((q) => (
              <li key={q.id} className="px-4 py-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/admin/questions/${q.id}`} className="font-medium text-slate-800 hover:text-slate-600">
                      {q.questionText}
                    </Link>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                      <Badge tone={STATUS_TONE[q.status] ?? "slate"}>{q.status}</Badge>
                      <Badge tone="green">Quality {q.qualityScore}</Badge>
                      <Badge>{q.subject.name}</Badge>
                      {q.board ? <Badge tone="blue">{q.board.name.split(" / ")[0]}</Badge> : null}
                      {q.chapter ? <span className="text-slate-500">{q.chapter.title}</span> : null}
                      <span className="text-slate-400">{q.difficulty} · {q.sourceType} · {q.mdcatRelevanceScore}r · {q._count.options} opts</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <QuestionRowActions id={q.id} status={q.status} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}