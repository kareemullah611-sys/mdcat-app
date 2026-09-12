"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Field, Input } from "@/components/ui";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const response = await fetch("/api/account/password-reset/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch(() => null);
    setLoading(false);
    if (!response?.ok) {
      const data = await response?.json().catch(() => null);
      setError(data?.error ?? "The connection was interrupted. Please try again.");
      return;
    }
    setSent(true);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Reset your password</h1>
      <p className="mt-1 text-sm text-slate-500">We will send a secure, single-use link that expires in 30 minutes.</p>
      {sent ? (
        <div role="status" className="mt-6 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800">
          If an account exists for that address, a reset email has been sent. Check your inbox and spam folder.
        </div>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <Field label="Email address">
            <Input type="email" required autoComplete="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} />
          </Field>
          {error ? <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          <Button type="submit" className="w-full" disabled={loading}>{loading ? "Sending…" : "Send reset link"}</Button>
        </form>
      )}
      <p className="mt-6 text-center text-sm"><Link href="/login" className="font-medium underline">Back to sign in</Link></p>
    </div>
  );
}
