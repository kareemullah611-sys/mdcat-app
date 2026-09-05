import Link from "next/link";
import { requireProfile } from "@/lib/session";
import { getStudentStats } from "@/lib/stats";
import { Badge, Card, PageHeader, Progress } from "@/components/ui";

export default async function ProgressPage() {
  const { user } = await requireProfile();
  const stats = await getStudentStats(user.id);

  return (
    <div>
      <PageHeader
        title="Progress"
        subtitle="Where you stand today. Deeper mastery analytics arrive in a later phase."
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <Card>
          <p className="text-sm font-medium text-slate-500">Total attempted</p>
          <p className="mt-1 text-3xl font-bold">{stats.overallAttempted}</p>
        </Card>
        <Card>
          <p className="text-sm font-medium text-slate-500">Overall accuracy</p>
          <p className="mt-1 text-3xl font-bold">{stats.overallAccuracy}%</p>
          <div className="mt-3">
            <Progress value={stats.overallAccuracy} />
          </div>
        </Card>
        <Card>
          <p className="text-sm font-medium text-slate-500">Correct answers</p>
          <p className="mt-1 text-3xl font-bold">{stats.overallCorrect}</p>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="mb-4 font-semibold">By subject</h2>
        {stats.bySubject.length === 0 ? (
          <p className="text-sm text-slate-500">No attempts yet — start practicing.</p>
        ) : (
          <ul className="space-y-4">
            {stats.bySubject.map((s) => (
              <li key={s.subjectId}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{s.subjectName}</span>
                  <span className="text-slate-500">
                    {s.correct}/{s.attempted} · {s.accuracy}%
                  </span>
                </div>
                <div className="mt-1">
                  <Progress value={s.accuracy} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card className="mt-6">
        <h2 className="mb-4 font-semibold">Topics to revisit</h2>
        {stats.weakTopics.length === 0 ? (
          <p className="text-sm text-slate-500">
            Answer at least two questions in a topic for a reliable weak-area signal.
          </p>
        ) : (
          <ul className="space-y-3">
            {stats.weakTopics.slice(0, 8).map((t) => (
              <li key={t.topicId} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-800">
                  {t.subjectName} → {t.topicTitle}
                </span>
                <Badge tone={t.accuracy >= 70 ? "green" : t.accuracy >= 50 ? "amber" : "red"}>
                  {t.accuracy}%
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <div className="mt-6">
        <h2 className="mb-3 font-semibold">Recent results</h2>
        {stats.recentTests.length === 0 ? (
          <p className="text-sm text-slate-500">
            No exams yet.{" "}
            <Link href="/exams" className="underline">Take your first exam →</Link>
          </p>
        ) : (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {stats.recentTests.map((t) => (
              <li key={t.id}>
                <Link
                  href={`/tests/${t.id}/result`}
                  className="flex items-center justify-between px-4 py-3 hover:bg-slate-50"
                >
                  <span className="text-sm font-medium text-slate-800">
                    {t.mode === "PRACTICE" ? "Practice session" : "Exam"} · {t.totalQuestions} questions
                  </span>
                  <span className="text-sm text-slate-500">
                    {t.score ?? 0}/{t.totalQuestions} · {t.percent}%
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}