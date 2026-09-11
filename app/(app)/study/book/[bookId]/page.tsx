import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireProfile } from "@/lib/session";
import { Badge } from "@/components/ui";
import { TextbookReader } from "@/components/textbook-reader";

type RouteProps = { params: Promise<{ bookId: string }> };

export default async function BookPage({ params }: RouteProps) {
  await requireProfile();
  const { bookId } = await params;

  const book = await prisma.book.findUnique({
    where: { id: bookId },
    include: {
      board: true,
      subject: true,
      class: true,
      chapters: { orderBy: [{ number: "asc" }] },
    },
  });
  if (!book) notFound();

  const counts = await prisma.question.groupBy({
    by: ["chapterId"],
    where: { chapterId: { in: book.chapters.map((c) => c.id) }, status: "PUBLISHED" },
    _count: { _all: true },
  });
  const countByChapter = new Map(counts.map((c) => [c.chapterId, c._count._all]));

  return (
    <div>
      <Link href="/study" className="text-sm font-medium text-slate-600 hover:text-slate-900">
        ← Study
      </Link>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <Badge>{book.subject.name}</Badge>
        <Badge tone="blue">{book.class.name}</Badge>
        <Badge tone="amber">{book.board.name}</Badge>
      </div>
      {book.sourceLabel ? (
        <p className="mt-1 text-xs text-slate-400">{book.sourceLabel}</p>
      ) : null}

      {book.fileUrl ? <TextbookReader bookId={book.id} title={book.title} /> : null}

      <div className="mt-6">
        {book.chapters.length === 0 ? (
          <p className="text-sm text-slate-500">No chapters yet.</p>
        ) : (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {book.chapters.map((chapter) => {
              const qCount = countByChapter.get(chapter.id) ?? 0;
              return (
                <li key={chapter.id}>
                  <Link
                    href={`/study/chapter/${chapter.id}`}
                    className="flex items-center justify-between px-4 py-3 hover:bg-slate-50"
                  >
                    <div>
                      <p className="font-medium text-slate-800">
                        {chapter.number ? `${chapter.number}. ` : ""}
                        {chapter.title}
                      </p>
                      {chapter.summary ? (
                        <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">{chapter.summary}</p>
                      ) : null}
                    </div>
                    <span className="shrink-0 text-sm text-slate-500">{qCount} MCQs</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
