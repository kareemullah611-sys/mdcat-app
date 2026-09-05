import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { Card, Badge } from "@/components/ui";
import { ChapterTopicManager } from "@/components/admin/chapter-topic-manager";

type RouteProps = { params: Promise<{ bookId: string }> };

export default async function AdminBookDetailPage({ params }: RouteProps) {
  await requireAdmin();
  const { bookId } = await params;

  const book = await prisma.book.findUnique({
    where: { id: bookId },
    include: { board: true, class: true, subject: true },
  });
  if (!book) notFound();

  const chapters = await prisma.chapter.findMany({
    where: { bookId },
    orderBy: [{ number: "asc" }],
    include: { _count: { select: { topics: true, questions: { where: { status: "PUBLISHED" } } } } },
  });

  return (
    <div>
      <Link href="/admin/books" className="text-sm font-medium text-slate-600 hover:text-slate-900">
        ← Books
      </Link>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <Badge>{book.subject.name}</Badge>
        <Badge tone="blue">{book.class.name}</Badge>
        <Badge tone="amber">{book.board.name}</Badge>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ChapterTopicManager bookId={book.id} bookTitle={book.title} chapters={chapters} />

        <Card>
          <h2 className="mb-3 font-semibold">Chapters</h2>
          {chapters.length === 0 ? (
            <p className="text-sm text-slate-500">Add a chapter to get started.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {chapters.map((c) => (
                <li key={c.id} className="flex items-center justify-between py-2.5">
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {c.number ? `${c.number}. ` : ""}{c.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {c._count.topics} topics · {c._count.questions} MCQs
                    </p>
                  </div>
                  <a
                    href={`/admin/questions?chapter=${c.id}`}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Add questions
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}