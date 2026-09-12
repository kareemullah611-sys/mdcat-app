"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp, signIn } from "@/lib/auth-client";
import { Button, Field, Input } from "@/components/ui";
import { normalizePakistanMobile } from "@/lib/pakistan-phone";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 10) {
      setError("Password must be at least 10 characters.");
      return;
    }
    const normalizedPhone = normalizePakistanMobile(phoneNumber);
    if (!normalizedPhone) {
      setError("Enter a valid Pakistan mobile number, for example 03001234567.");
      return;
    }
    setError(null);
    setLoading(true);
    const res = await signUp.email({ name, email, password, phoneNumber: normalizedPhone });
    if (res.error) {
      setError(res.error.message ?? "Unable to create account.");
      setLoading(false);
      return;
    }
    // Auto sign-in after signup, then onboarding.
    await signIn.email({ email, password });
    router.push("/onboarding");
    router.refresh();
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <h1 className="text-2xl font-bold">Create your account</h1>
      <p className="mt-1 text-sm text-slate-500">
        Free account — enjoy unlimited practice while we&apos;re in beta.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <Field label="Full name">
          <Input
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field label="Email">
          <Input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field label="Pakistan mobile number" hint="Format: 03XX XXXXXXX. SMS verification will be added before the number is used as a security factor.">
          <Input
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="0300 1234567"
            maxLength={18}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Field>
        <Field label="Password" hint="At least 10 characters.">
          <Input
            type="password"
            required
            minLength={10}
            maxLength={128}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        {error ? (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating account…" : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-slate-900 underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
