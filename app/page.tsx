import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/session";

export default async function LandingPage() {
  const user = await getSessionUser();
  if (user) redirect("/dashboard");

  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <section className="mx-auto max-w-2xl py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          MDCAT Pakistan
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-slate-600">
          Prepare for MDCAT and your FSc board exams with an intelligent question
          bank built from Federal, Punjab, Sindh, KPK and Balochistan textbooks —
          Biology, Chemistry and Physics.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/signup"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 px-6 text-base font-medium text-white transition-colors hover:bg-slate-700"
          >
            Create free account
          </Link>
          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 px-6 text-base font-medium text-slate-800 transition-colors hover:bg-slate-100"
          >
            Sign in
          </Link>
        </div>
        <p className="mt-10 text-xs text-slate-400">
          Practice mode · Timed exams · Per-board &amp; cross-board filter &middot; Progress tracking
        </p>
      </section>
    </main>
  );
}