"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp, signIn } from "@/lib/auth-client";
import { Button, Field, Input } from "@/components/ui";
import { normalizePakistanMobile } from "@/lib/pakistan-phone";
import { normalizeUsername, usernameValidationError } from "@/lib/username";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [usernameStatus, setUsernameStatus] = useState<"idle" | "waiting" | "checking" | "available" | "taken" | "error" | "invalid">("idle");
  const lastCheck = useRef<{ username: string; status: "available" | "taken" } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const value = username;
    if (!value) {
      return () => controller.abort();
    }
    const timer = window.setTimeout(async () => {
      const validationMessage = usernameValidationError(value);
      if (validationMessage) {
        setUsernameError(validationMessage);
        setUsernameStatus("invalid");
        return;
      }
      const normalized = normalizeUsername(value);
      if (lastCheck.current?.username === normalized) {
        setUsernameStatus(lastCheck.current.status);
        return;
      }
      setUsernameError(null);
      setUsernameStatus("checking");
      try {
        const response = await fetch(`/api/auth/username-availability?username=${encodeURIComponent(normalized)}`, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        if (!response.ok && response.status !== 400) throw new Error("availability request failed");
        const result = await response.json() as { available: boolean; reason?: string };
        if (controller.signal.aborted) return;
        const status = result.available ? "available" : "taken";
        lastCheck.current = { username: normalized, status };
        setUsernameStatus(status);
        setUsernameError(result.available ? null : result.reason === "taken" ? "That username is already taken." : "Username is invalid.");
      } catch (requestError) {
        if (requestError instanceof Error && requestError.name === "AbortError") return;
        setUsernameStatus("error");
        setUsernameError(null);
      }
    }, 500);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [username]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    if (!normalizedName || !normalizedEmail || !username || !phoneNumber.trim() || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    const usernameIssue = usernameValidationError(username);
    if (usernameIssue) {
      setUsernameError(usernameIssue);
      setError(null);
      return;
    }
    if (usernameStatus === "taken") {
      setUsernameError("That username is already taken.");
      return;
    }
    if (password.length < 10) {
      setError("Password must be at least 10 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const normalizedPhone = normalizePakistanMobile(phoneNumber);
    if (!normalizedPhone) {
      setError("Enter a valid Pakistan mobile number, for example 03001234567.");
      return;
    }
    setError(null);
    setUsernameError(null);
    setLoading(true);
    const res = await signUp.email({ name: normalizedName, email: normalizedEmail, username: normalizeUsername(username), password, phoneNumber: normalizedPhone });
    if (res.error) {
      const message = res.error.message ?? "Unable to create account.";
      if (/username/i.test(message)) {
        setUsernameError(message);
      } else {
        // A concurrent registration can win after an earlier availability
        // check. Re-check only after a failed transaction to present a clean,
        // field-specific race result while the database remains authoritative.
        try {
          const availabilityResponse = await fetch(`/api/auth/username-availability?username=${encodeURIComponent(normalizeUsername(username))}`, { headers: { Accept: "application/json" } });
          const availability = await availabilityResponse.json() as { available?: boolean; reason?: string };
          if (availability.reason === "taken") setUsernameError("That username was just taken. Please choose another username.");
          else setError(message);
        } catch {
          setError(message);
        }
      }
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
        <p className="text-xs text-slate-500">All fields are required.</p>
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
        <Field
          label="Username"
          hint="4–20 characters. Use letters, numbers, underscores, or periods; begin and end with a letter or number."
          error={usernameError}
        >
          <Input
            required
            minLength={4}
            maxLength={20}
            autoComplete="username"
            autoCapitalize="none"
            autoCorrect="off"
            inputMode="text"
            spellCheck={false}
            placeholder="kareem.ullah"
            value={username}
            aria-invalid={usernameError ? true : undefined}
            aria-describedby="username-status"
            onBlur={() => setUsernameError(usernameValidationError(username))}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError(null);
              setUsernameStatus(e.target.value ? "waiting" : "idle");
            }}
          />
          <span id="username-status" aria-live="polite" className="block min-h-4 text-xs">
            {usernameStatus === "checking" ? <span className="text-slate-500">Checking username…</span> : null}
            {usernameStatus === "available" ? <span className="text-emerald-700">✓ Username is available</span> : null}
            {usernameStatus === "error" ? <span className="text-slate-500">Unable to check username right now. You can still try submitting the form.</span> : null}
          </span>
        </Field>
        <Field label="Mobile number">
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
        <Field label="Confirm password">
          <Input
            type="password"
            required
            minLength={10}
            maxLength={128}
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Field>

        {error ? (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <Button type="submit" className="w-full" disabled={loading || usernameStatus === "taken" || (!!username && usernameValidationError(username) !== null)}>
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
