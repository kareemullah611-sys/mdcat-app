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