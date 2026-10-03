import { ResetPasswordForm } from "@/components/reset-password-form";

/**
 * Better Auth emails `${baseURL}/reset-password/<token>?callbackURL=…`
 * (see `sendResetPassword` in lib/auth.ts and better-auth's password route), so
 * the token arrives as a path segment. Without this route the emailed link 404s
 * and the whole forgot-password flow is unusable; the token is not a query
 * parameter.
 */
export default async function ResetPasswordTokenPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ callbackURL?: string; error?: string }>;
}) {
  const [{ token }, query] = await Promise.all([params, searchParams]);
  return <ResetPasswordForm token={token} invalid={Boolean(query.error)} callbackUrl={query.callbackURL} />;
}
