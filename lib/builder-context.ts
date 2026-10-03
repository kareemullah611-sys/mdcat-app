import { prisma } from "@/lib/prisma";
import type { BuilderContext } from "@/components/test-builder";

export async function getBuilderContext(): Promise<BuilderContext> {
  const [boards, classes, subjects, chapters] = await Promise.all([
    prisma.board.findMany({ orderBy: { name: "asc" } }),
    prisma.schoolClass.findMany({ orderBy: { grade: "asc" } }),
    prisma.subject.findMany({ orderBy: { name: "asc" } }),
    prisma.chapter.findMany({
      // Chapter.status alone let chapters of a DRAFT book appear as selectable
      // chips, while /study hid that book entirely.
      where: { status: "PUBLISHED", book: { status: "PUBLISHED" } },
      include: { book: { include: { subject: true, class: true, board: true } } },
      orderBy: { title: "asc" },
    }),
  ]);

  return {
    boards,
    classes,
    subjects,
    chapters: chapters.map((c) => ({
      id: c.id,
      subjectId: c.book.subjectId,
      label: `${c.book.subject.name} · ${c.book.class.name} · ${c.book.board.name.split(" / ")[0]} — ${c.number ?? ""} ${c.title}`.trim(),
    })),
  };
}