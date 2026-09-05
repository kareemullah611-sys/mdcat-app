import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ROLES } from "@/lib/constants";

export async function requireApiUser(): Promise<{ userId: string } | null> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) return null;
  return { userId: session.user.id };
}

export async function requireApiAdmin(): Promise<{ userId: string } | null> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) return null;
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { role: { select: { code: true } } },
  });
  if (!user) return null;
  const admin =
    user.role?.code === ROLES.ADMIN || user.role?.code === ROLES.SUPER_ADMIN;
  if (!admin) return null;
  return { userId: user.id };
}