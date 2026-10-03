"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Route-level error boundary. Every page here awaits Prisma directly, so a
 * dropped connection or a missing migration previously produced Next.js's
 * default error shell with no navigation. The user gets a retry and a way back.
 */
export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced in the platform logs; the digest matches the server-side trace.
    console.error("Route error", error.digest ?? "", error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center text-center">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Something went wrong</p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">This page failed to load</h1>
      <p className="mt-2 text-sm text-slate-600">
        Your saved work is safe. Try again — if it keeps happening the connection may be unstable.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-10 items-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-700"
        >
          Try again
        </button>
        <Link
          href="/dashboard"
          className="inline-flex h-10 items-center rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-800 hover:bg-slate-100"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}
