import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function getStudentProfile(userId: string) {
  const profile = await prisma.studentProfile.findUnique({
    where: { userId },
    include: {
      subjects: { include: { subject: true } },
      board: true,
      class: true,
    },
  });
  return profile;
}

export async function getOnboardingContext() {
  const [boards, classes, subjects] = await Promise.all([
    prisma.board.findMany({ orderBy: { name: "asc" } }),
    prisma.schoolClass.findMany({ orderBy: { grade: "asc" } }),
    prisma.subject.findMany({ orderBy: { name: "asc" } }),
  ]);
  return { boards, classes, subjects };
}

/**
 * How many board-scoped questions exist for a student's board and class.
 *
 * The authored bank is mapped to FBISE and Balochistan, so a Punjab, Sindh or
 * KPK profile has very little board practice available. Practice shows that
 * plainly and points at the MDCAT syllabus scope rather than letting the
 * student discover an empty or four-question paper by trial (§3 MODE A/B).
 */
export async function countBoardQuestions(
  boardId: string | null | undefined,
  classId: string | null | undefined,
): Promise<number> {
  if (!boardId) return 0;
  const where: Prisma.QuestionWhereInput = {
    status: "PUBLISHED",
    OR: [{ boardId }, { mappings: { some: { boardId } } }],
  };
  if (classId) {
    where.AND = [{ OR: [{ classId }, { mappings: { some: { schoolClassId: classId } } }] }];
  }
  return prisma.question.count({ where });
}
