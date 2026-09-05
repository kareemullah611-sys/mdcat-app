import Link from "next/link";
import { requireProfile } from "@/lib/session";
import { getBuilderContext } from "@/lib/builder-context";
import { TestBuilder } from "@/components/test-builder";
import { prisma } from "@/lib/prisma";
import { Badge, PageHeader } from "@/components/ui";

export default async function ExamsPage() {
  const { user } = await requireProfile();
  const context = await getBuilderContext();

  const history = await prisma.test.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <div>
      <PageHeader
        title="Exams"
        subtitle="Timed, examination-mode papers with no feedback until submission."
      />

      <TestBuilder context={context} defaultMode="EXAM" />

      <div className="mt-10">
        <h2 className="mb-3 font-semibold">Exam history</h2>
        {history.length === 0 ? (
          <p className="text-sm text-slate-500">No exams yet — create one above.</p>
        ) : (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {history.map((t) => (
              <li key={t.id}>
                <Link
                  href={`/tests/${t.id}/result`}
                  className="flex items-center justify-between px-4 py-3 hover:bg-slate-50"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {t.mode === "PRACTICE" ? "Practice session" : t.mode === "EXAM" ? "Timed exam" : t.mode}{" "}
                      · {t.totalQuestions} questions
                    </p>
                    <p className="text-xs text-slate-500">
                      {t.createdAt.toLocaleString()} · {t.timeLimitSeconds ? `${Math.round(t.timeLimitSeconds / 60)} min` : "untimed"}
                    </p>
                  </div>
                  <div className="text-right">
                    {t.status === "COMPLETED" ? (
                      <>
                        <Badge tone={t.score !== null && t.totalQuestions > 0 && t.score / t.totalQuestions >= 0.7 ? "green" : "amber"}>
                          {t.totalQuestions > 0 ? Math.round(((t.score ?? 0) / t.totalQuestions) * 100) : 0}%
                        </Badge>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {t.correctCount ?? 0} correct
                        </p>
                      </>
                    ) : (
                      <Badge tone="blue">{t.status === "IN_PROGRESS" ? "In progress" : t.status}</Badge>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}