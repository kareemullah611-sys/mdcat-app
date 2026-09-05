import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge, Card, PageHeader } from "@/components/ui";

export default async function AdminDashboardPage() {
  const [userCount, questionCount, publishedQuestions, bookCount, testCount] =
    await Promise.all([
      prisma.user.count(),
      prisma.question.count(),
      prisma.question.count({ where: { status: "PUBLISHED" } }),
      prisma.book.count(),
      prisma.test.count(),
    ]);

  const latestQuestions = await prisma.question.findMany({
    orderBy: { createdAt: "desc" },
    take: 8,
    include: { subject: true, board: true },
  });

  return (
    <div>
      <PageHeader title="Admin dashboard" subtitle="Platform and content overview." />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        <Card><p className="text-xs text-slate-500">Users</p><p className="mt-1 text-2xl font-bold">{userCount}</p></Card>
        <Card><p className="text-xs text-slate-500">Questions</p><p className="mt-1 text-2xl font-bold">{publishedQuestions}<span className="text-sm text-slate-400">/{questionCount}</span></p></Card>
        <Card><p className="text-xs text-slate-500">Books</p><p className="mt-1 text-2xl font-bold">{bookCount}</p></Card>
        <Card><p className="text-xs text-slate-500">Tests</p><p className="mt-1 text-2xl font-bold">{testCount}</p></Card>
      </div>

      <Card className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold">Latest questions</h2>
          <Link href="/admin/questions" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Manage →
          </Link>
        </div>
        <ul className="divide-y divide-slate-100">
          {latestQuestions.map((q) => (
            <li key={q.id} className="flex items-center justify-between gap-3 py-2.5">
              <p className="line-clamp-1 text-sm font-medium text-slate-800">{q.questionText}</p>
              <div className="flex shrink-0 items-center gap-2">
                <Badge>{q.subject.name}</Badge>
                {q.board ? <Badge tone="blue">{q.board.name.split(" / ")[0]}</Badge> : null}
              </div>
            </li>
          ))}
          {latestQuestions.length === 0 ? (
            <li className="py-3 text-sm text-slate-500">No questions yet — add some.</li>
          ) : null}
        </ul>
      </Card>
    </div>
  );
}