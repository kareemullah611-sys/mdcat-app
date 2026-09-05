import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireProfile } from "@/lib/session";
import { Badge, Card, Progress } from "@/components/ui";

type RouteProps = { params: Promise<{ testId: string }> };

export default async function TestResultPage({ params }: RouteProps) {
  const { user } = await requireProfile();
  const { testId } = await params;

  const test = await prisma.test.findUnique({
    where: { id: testId },
    include: {
      questions: {
        orderBy: { orderIndex: "asc" },
        include: {
          question: {
            include: {
              options: { orderBy: { order: "asc" } },
              subject: true,
              chapter: true,
              topic: true,
              board: true,
            },
          },
        },
      },
    },
  });

  if (!test || test.userId !== user.id) notFound();
  if (test.status !== "COMPLETED") notFound();

  const total = test.totalQuestions;
  const correct = test.questions.filter((q) => q.isCorrect).length;
  const incorrect = test.questions.filter((q) => q.isCorrect === false).length;
  const unanswered = total - correct - incorrect;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const timeUsed = test.timeUsedSeconds ?? test.questions.reduce((s, q) => s + (q.timeSpentSeconds ?? 0), 0);
  const avgPerQuestion = total ? Math.round(timeUsed / total) : 0;

  // Per-subject accuracy over attempted questions
  const subjectMap = new Map<string, { name: string; attempted: number; correct: number }>();
  for (const tq of test.questions) {
    if (tq.isCorrect === null) continue;
    const subj = tq.question.subject;
    const e = subjectMap.get(tq.question.subjectId) ?? { name: subj.name, attempted: 0, correct: 0 };
    e.attempted++;
    if (tq.isCorrect) e.correct++;
    subjectMap.set(tq.question.subjectId, e);
  }

  // Per-chapter weak areas (only chapters with attempted questions)
  const chapterMap = new Map<string, { label: string; attempted: number; correct: number }>();
  for (const tq of test.questions) {
    if (tq.isCorrect === null) continue;
    const ch = tq.question.chapter;
    if (!ch) continue;
    const label = `${tq.question.subject.name} → ${ch.title}`;
    const e = chapterMap.get(ch.id) ?? { label, attempted: 0, correct: 0 };
    e.attempted++;
    if (tq.isCorrect) e.correct++;
    chapterMap.set(ch.id, e);
  }
  const weakChapters = [...chapterMap.values()]
    .map((c) => ({ ...c, accuracy: Math.round((c.correct / c.attempted) * 100) }))
    .filter((c) => c.attempted >= 2)
    .sort((a, b) => a.accuracy - b.accuracy);

  const mistakes = test.questions.filter((q) => q.isCorrect === false);

  return (
    <div>
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {test.mode === "PRACTICE" ? "Practice session" : "Exam"} result
        </p>
        <h1 className="mt-1 text-5xl font-bold">{percent}%</h1>
        <p className="mt-2 text-sm text-slate-500">
          {correct} / {total} · {new Date(test.submittedAt ?? test.createdAt).toLocaleString()}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card>
          <p className="text-xs font-medium text-slate-500">Correct</p>
          <p className="mt-1 text-2xl font-bold text-emerald-700">{correct}</p>
        </Card>
        <Card>
          <p className="text-xs font-medium text-slate-500">Incorrect</p>
          <p className="mt-1 text-2xl font-bold text-red-700">{incorrect}</p>
        </Card>
        <Card>
          <p className="text-xs font-medium text-slate-500">Unanswered</p>
          <p className="mt-1 text-2xl font-bold text-slate-600">{unanswered}</p>
        </Card>
        <Card>
          <p className="text-xs font-medium text-slate-500">Avg time / question</p>
          <p className="mt-1 text-2xl font-bold">{avgPerQuestion}s</p>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-3 font-semibold">Subject performance</h2>
          {subjectMap.size === 0 ? (
            <p className="text-sm text-slate-500">No answered questions.</p>
          ) : (
            <ul className="space-y-3">
              {[...subjectMap.values()].map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-slate-500">
                      {s.correct}/{s.attempted} · {Math.round((s.correct / Math.max(1, s.attempted)) * 100)}%
                    </span>
                  </div>
                  <div className="mt-1">
                    <Progress value={(s.correct / Math.max(1, s.attempted)) * 100} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold">Weak chapters</h2>
            <Link href="/practice" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Practice →
            </Link>
          </div>
          {weakChapters.length === 0 ? (
            <p className="text-sm text-slate-500">
              {total > 0 ? "No weak chapters identified — great run!" : "Answer questions to see chapter performance."}
            </p>
          ) : (
            <ul className="space-y-3">
              {weakChapters.slice(0, 5).map((c) => (
                <li key={c.label}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-800">{c.label}</span>
                    <Badge tone={c.accuracy >= 70 ? "green" : c.accuracy >= 50 ? "amber" : "red"}>
                      {c.accuracy}%
                    </Badge>
                  </div>
                  <div className="mt-1">
                    <Progress value={c.accuracy} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      {mistakes.length > 0 ? (
        <div className="mt-6">
          <h2 className="mb-3 font-semibold">Review mistakes ({mistakes.length})</h2>
          <ul className="space-y-3">
            {mistakes.map((tq) => {
              const correctOption = tq.question.options.find((o) => o.isCorrect);
              const selectedIndex = tq.selectedOptionId
                ? tq.question.options.findIndex((o) => o.id === tq.selectedOptionId)
                : -1;
              const correctIndex = correctOption
                ? tq.question.options.findIndex((o) => o.id === correctOption.id)
                : -1;
              return (
                <li key={tq.id}>
                  <Card>
                    <p className="font-medium text-slate-900">{tq.question.questionText}</p>
                    {selectedIndex >= 0 && (
                      <p className="mt-1 text-xs text-red-700">
                        Your answer: {["A", "B", "C", "D"][selectedIndex] ?? "—"}
                      </p>
                    )}
                    {correctIndex >= 0 && (
                      <p className="text-xs text-emerald-700">
                        Correct answer: {["A", "B", "C", "D"][correctIndex] ?? "—"}
                      </p>
                    )}
                    {tq.question.explanation ? (
                      <p className="mt-2 text-sm leading-6 text-slate-600">{tq.question.explanation}</p>
                    ) : null}
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/exams" className="inline-flex h-11 items-center rounded-lg bg-slate-900 px-5 text-sm font-medium text-white transition-colors hover:bg-slate-700">
          Take another exam
        </Link>
        <Link href="/practice" className="inline-flex h-11 items-center rounded-lg border border-slate-300 px-5 text-sm font-medium text-slate-800 hover:bg-slate-100">
          Practice weak areas
        </Link>
      </div>
    </div>
  );
}