import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { guardMutation } from "@/lib/request-guard";
import { securityLogCredentialEvent } from "@/lib/security-log";

const schema = z.object({
  currentPassword: z.string().min(1).max(128),
  newPassword: z.string().min(10).max(128),
}).strict();

export async function POST(request: Request) {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({ headers: requestHeaders });
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const guarded = guardMutation(request, "ACCOUNT", session.user.id);
  if (!guarded.ok) return NextResponse.json({ error: "Request rejected" }, { status: guarded.status });
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success || parsed.data.currentPassword === parsed.data.newPassword) {
    return NextResponse.json({ error: "Choose a different password of at least 10 characters." }, { status: 400 });
  }
  try {
    await auth.api.changePassword({
      headers: requestHeaders,
      body: { ...parsed.data, revokeOtherSessions: true },
    });
    securityLogCredentialEvent("password_change", session.user.id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "The current password is incorrect or the request expired." }, { status: 400 });
  }
}
