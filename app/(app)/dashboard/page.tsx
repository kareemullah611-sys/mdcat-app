import Link from "next/link";
import { requireProfile } from "@/lib/session";
import { getStudentStats } from "@/lib/stats";
import { getStudentProfile } from "@/lib/progress-helpers";
import { Badge, Card, Progress, EmptyState } from "@/components/ui";

function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

export default async function DashboardPage() {
  const { user } = await requireProfile();
  const [stats, profile] = await Promise.all([
    getStudentStats(user.id),
    getStudentProfile(user.id),
  ]);
  const subjects = profile?.subjects.map((s) => s.subject) ?? [];

  const weakTopics = stats.weakTopics.slice(0, 3);
  const hasAttempts = stats.overallAttempted > 0;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{greeting()}</h1>
        <p className="mt-1 text-sm text-slate-500">
          {user.name ? `Welcome back, ${user.name.split(" ")[0]}. ` : ""}
          {hasAttempts
            ? `You've answered ${stats.overallAttempted} questions so far.`
            : "Start practicing to see your progress."}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-sm font-medium text-slate-500">Overall accuracy</p>
          <p className="mt-1 text-3xl font-bold">{stats.overallAccuracy}%</p>
          <div className="mt-3">
            <Progress value={stats.overallAccuracy} />
          </div>
        </Card>
        <Card>
          <p className="text-sm font-medium text-slate-500">Correct answers</p>
          <p className="mt-1 text-3xl font-bold">
            {stats.overallCorrect}
            <span className="text-base font-normal text-slate-400"> / {stats.overallAttempted}</span>
          </p>
        </Card>
        <Card>
          <p className="text-sm font-medium text-slate-500">Recent exams</p>
          <p className="mt-1 text-3xl font-bold">{stats.recentTests.length}</p>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold">Quick practice</h2>
            <Link href="/practice" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Practice →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {subjects.length === 0 ? (
              <p className="text-sm text-slate-500">
                <Link href="/onboarding" className="underline">Choose your subjects</Link> to get started.
              </p>
            ) : (
              subjects.map((s) => (
                <Link
                  key={s.id}
                  href={`/practice?subject=${encodeURIComponent(s.id)}`}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {s.name}
                </Link>
              ))
            )}
          </div>
        </Card>

        <Card>
          <h2 className="mb-3 font-semibold">Weak areas</h2>
          {weakTopics.length === 0 ? (
            <p className="text-sm text-slate-500">
              {hasAttempts
                ? "Nothing to report yet — answer more questions per topic for a reliable signal."
                : "Your weak areas appear here after you answer a few questions in a topic."}
            </p>
          ) : (
            <ul className="space-y-3">
              {weakTopics.map((t) => (
                <li key={t.topicId}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-800">
                      {t.subjectName} → {t.topicTitle}
                    </span>
                    <span className="text-slate-500">{t.accuracy}%</span>
                  </div>
                  <div className="mt-1">
                    <Progress value={t.accuracy} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold">Recent exams</h2>
          <Link href="/exams" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            All exams →
          </Link>
        </div>
        {stats.recentTests.length === 0 ? (
          <EmptyState
            title="No exams yet"
            description="Create a timed exam to simulate the real MDCAT environment."
            action={
              <Link href="/exams" className="inline-flex h-10 items-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-700">
                Start an exam
              </Link>
            }
          />
        ) : (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {stats.recentTests.map((t) => (
              <li key={t.id}>
                <Link
                  href={`/tests/${t.id}/result`}
                  className="flex items-center justify-between px-4 py-3 hover:bg-slate-50"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {t.mode === "PRACTICE" ? "Practice session" : "Exam"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {t.submittedAt ? new Date(t.submittedAt).toLocaleString() : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge tone={t.percent >= 70 ? "green" : t.percent >= 50 ? "amber" : "red"}>
                      {t.percent}%
                    </Badge>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {t.score ?? 0} / {t.totalQuestions}
                    </p>
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