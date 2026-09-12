import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ROLES } from "@/lib/constants";
import { adminMfaRequired } from "@/lib/mfa";

export type SessionUser = {
  id: string;
  email: string;
  name: string | null;
  roleCode: string;
  isAdmin: boolean;
  hasProfile: boolean;
  twoFactorEnabled: boolean;
};

async function fetchUser(userId: string): Promise<SessionUser | null> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      role: { select: { code: true } },
      profile: { select: { id: true } },
    },
  });
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    roleCode: user.role?.code ?? ROLES.STUDENT,
    isAdmin: user.role?.code === ROLES.ADMIN || user.role?.code === ROLES.SUPER_ADMIN,
    hasProfile: user.profile !== null,
    twoFactorEnabled: user.twoFactorEnabled,
  };
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) return null;
  return fetchUser(session.user.id);
}

export async function requireUser(): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  return user;
}

export async function requireProfile(): Promise<{ user: SessionUser; profile: { id: string } }> {
  const user = await requireUser();
  if (!user.isAdmin && !user.hasProfile) redirect("/onboarding");
  return { user, profile: { id: user.id } };
}

export async function requireAdmin(options?: { allowMfaEnrollment?: boolean }): Promise<SessionUser> {
  const user = await requireUser();
  if (!user.isAdmin) redirect("/dashboard");
  if (adminMfaRequired() && !user.twoFactorEnabled && !options?.allowMfaEnrollment) {
    redirect("/admin/2fa");
  }
  return user;
}
