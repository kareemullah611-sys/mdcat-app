import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/api-auth";
import { onboardingSchema } from "@/lib/schemas";
import { prisma } from "@/lib/prisma";
import { guardMutation } from "@/lib/request-guard";
import { securityLogProfileMutation } from "@/lib/security-log";

export async function POST(request: Request) {
  const apiUser = await requireApiUser();
  if (!apiUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const guarded = guardMutation(request, "ONBOARDING", apiUser.userId);
  if (!guarded.ok) {
    return NextResponse.json(
      { error: guarded.status === 403 ? "Forbidden" : "Too many requests" },
      { status: guarded.status, headers: { "Retry-After": String(guarded.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = onboardingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
  }

  const { classId, boardId, goal, subjectIds } = parsed.data;
  const preparationMode = goal === "MDCAT" ? "MDCAT" : goal === "BOARD_EXAM" ? "BOARD" : "BOTH";

  const profileId = await prisma.$transaction(async (tx) => {
    const profile = await tx.studentProfile.upsert({
      where: { userId: apiUser.userId },
      update: { classId, boardId, goal, preparationMode },
      create: { userId: apiUser.userId, classId, boardId, goal, preparationMode },
    });

    await tx.studentSubject.deleteMany({ where: { profileId: profile.id } });
    await tx.studentSubject.createMany({
      data: subjectIds.map((subjectId) => ({ profileId: profile.id, subjectId })),
    });
    return profile.id;
  });
  securityLogProfileMutation("onboard", apiUser.userId, profileId);

  return NextResponse.json({ ok: true });
}
