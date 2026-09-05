import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/api-auth";
import { onboardingSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const apiUser = await requireApiUser();
  if (!apiUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json().catch(() => null);
  const parsed = onboardingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const { classId, boardId, goal, subjectIds } = parsed.data;
  const preparationMode = goal === "MDCAT" ? "MDCAT" : goal === "BOARD_EXAM" ? "BOARD" : "BOTH";

  await prisma.$transaction(async (tx) => {
    const profile = await tx.studentProfile.upsert({
      where: { userId: apiUser.userId },
      update: { classId, boardId, goal, preparationMode },
      create: { userId: apiUser.userId, classId, boardId, goal, preparationMode },
    });

    await tx.studentSubject.deleteMany({ where: { profileId: profile.id } });
    await tx.studentSubject.createMany({
      data: subjectIds.map((subjectId) => ({ profileId: profile.id, subjectId })),
    });
  });

  return NextResponse.json({ ok: true });
}