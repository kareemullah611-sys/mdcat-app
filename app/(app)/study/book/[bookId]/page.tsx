import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { buildTextbookScopeWhere } from "@/lib/test-service";
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
  // Same reason as the chapter page: an unpublished book has no reader.
  if (book.status !== "PUBLISHED") notFound();

  // Per-chapter counts under the board + class scope of this book, so a badge
  // never promises questions that board practice cannot draw.
  const chapterIds = book.chapters.map((chapter) => chapter.id);
  const counts = chapterIds.length
    ? await prisma.question.groupBy({
        by: ["chapterId"],
        where: buildTextbookScopeWhere({
          subjectId: book.subjectId,
          boardId: book.boardId,
          classId: book.classId,
          chapterIds,
        }),
        _count: { _all: true },
      })
    : [];
  const countByChapter = new Map(
    counts
      .filter((row): row is typeof row & { chapterId: string } => row.chapterId !== null)
      .map((row) => [row.chapterId, row._count._all]),
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <Badge>{book.subject.name}</Badge>
        <Badge tone="blue">{book.class.name}</Badge>
        <Badge tone="amber">{book.board.name}</Badge>
      </div>
      {book.sourceLabel ? (
        <p className="mt-1 text-xs text-slate-400">{book.sourceLabel}</p>
      ) : null}

      {book.fileUrl ? <TextbookReader bookId={book.id} title={book.title} pageCount={book.pageCount} /> : null}

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
