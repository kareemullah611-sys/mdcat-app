import Link from "next/link";

/**
 * Rendered for any route that calls `notFound()` — a bogus book, chapter or test
 * id, or a result page for a test that was never completed. Without this the app
 * showed Next.js's bare 404 with no navigation and no way back.
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center text-center">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Not found</p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">We couldn&rsquo;t find that page</h1>
      <p className="mt-2 text-sm text-slate-600">
        The link may be out of date, or the item may have been unpublished. A test you have not finished yet has no
        result page until you submit it.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/dashboard"
          className="inline-flex h-10 items-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-700"
        >
          Go to dashboard
        </Link>
        <Link
          href="/study"
          className="inline-flex h-10 items-center rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-800 hover:bg-slate-100"
        >
          Browse study
        </Link>
      </div>
    </div>
  );
}
