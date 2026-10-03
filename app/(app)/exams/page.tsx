import Link from "next/link";
import { requireProfile } from "@/lib/session";
import { getBuilderContext } from "@/lib/builder-context";
import { TestBuilder } from "@/components/test-builder";
import { prisma } from "@/lib/prisma";
import { Badge, PageHeader } from "@/components/ui";
import { testModeLabel } from "@/lib/stats";

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

      {/* An exam defaults to the MDCAT syllabus: it is the same paper for every
          board, so a Punjab profile is not starved of questions (§3 MODE B). */}
      <TestBuilder context={context} defaultMode="EXAM" defaults={{ scope: "MDCAT", boardIds: [] }} />

      <div className="mt-10">
        <h2 className="mb-3 font-semibold">Exam history</h2>
        {history.length === 0 ? (
          <p className="text-sm text-slate-500">No exams yet — create one above.</p>
        ) : (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {history.map((t) => (
              <li key={t.id}>
                {/* A test that is still in progress links to the runner so it can
                    be resumed or submitted; only a completed test has a result
                    page, and linking there anyway produced a 404. */}
                <Link
                  href={t.status === "COMPLETED" ? `/tests/${t.id}/result` : `/tests/${t.id}`}
                  className="flex items-center justify-between px-4 py-3 hover:bg-slate-50"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {testModeLabel(t.mode)} · {t.totalQuestions} questions
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
                      <Badge tone="blue">{t.status === "IN_PROGRESS" ? "Resume" : t.status}</Badge>
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