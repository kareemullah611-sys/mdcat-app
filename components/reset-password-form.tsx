"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button, Field, Input } from "@/components/ui";

export function ResetPasswordForm({ token, invalid }: { token?: string; invalid: boolean }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!token || password.length < 10 || password !== confirm) {
      setError(password !== confirm ? "Passwords do not match." : "Use at least 10 characters.");
      return;
    }
    setLoading(true);
    setError(null);
    const result = await authClient.resetPassword({ newPassword: password, token });
    setLoading(false);
    if (result.error) {
      setError("This reset link is invalid, expired, or has already been used.");
      return;
    }
    setDone(true);
  }

  if (done) return <div><h1 className="text-2xl font-bold">Password changed</h1><p className="mt-3 text-sm text-slate-600">Your other sessions were signed out. You can now use your new password.</p><Link href="/login" className="mt-6 inline-block font-medium underline">Sign in</Link></div>;
  if (invalid || !token) return <div><h1 className="text-2xl font-bold">Invalid reset link</h1><p className="mt-3 text-sm text-slate-600">The link has expired or has already been used.</p><Link href="/forgot-password" className="mt-6 inline-block font-medium underline">Request another link</Link></div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Choose a new password</h1>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <Field label="New password" hint="Use at least 10 characters."><Input type="password" required minLength={10} maxLength={128} autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} /></Field>
        <Field label="Confirm new password"><Input type="password" required minLength={10} maxLength={128} autoComplete="new-password" value={confirm} onChange={(event) => setConfirm(event.target.value)} /></Field>
        {error ? <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
        <Button type="submit" className="w-full" disabled={loading}>{loading ? "Changing…" : "Change password"}</Button>
      </form>
    </div>
  );
}
