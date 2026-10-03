"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/cn";
import { backNavLabel, backNavParentFor, backNavShowsFor } from "@/lib/back-nav-rules";

/**
 * The app's back control, mounted once per layout.
 *
 * On a phone there is no browser chrome, and the persistent navigation only
 * reaches the top-level routes, so anything reached by drilling in — a chapter, a
 * book, a profile screen, an admin record — is a dead end without this. Adding a
 * control per page meant every new screen had to remember to, and most did not.
 *
 * So the rule lives in `lib/back-nav-rules.ts` and is keyed off the pathname: the
 * control appears on every route that is not an entry point in its own right,
 * which means a page added in future inherits a working way back without anyone
 * editing it.
 *
 * Clicking returns to the page the student actually came from. A tab with no
 * history — opened from a link, a bookmark or a shared URL — has nothing to pop,
 * so it falls back to the route's parent.
 */

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

const CONTROL =
  // 44px minimum target: on mobile this is the primary way out of a page.
  "-ml-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900";

export function BackNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  if (!backNavShowsFor(pathname)) return null;

  const parent = backNavParentFor(pathname);
  const label = backNavLabel(pathname);

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => (window.history.length > 1 ? router.back() : router.push(parent))}
      className={cn(CONTROL, className)}
    >
      <Arrow />
    </button>
  );
}

/**
 * Exit control for a test in progress.
 *
 * `BackNav` deliberately steps aside on the runner: a timed exam only submits on
 * submit or at zero, so leaving discards the answers not yet sent and has to be
 * confirmed. A practice session stores every answer as it is given, so it can
 * leave without ceremony.
 */
export function ExitTestLink({ timed, href, label }: { timed: boolean; href: string; label: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        if (
          timed &&
          !window.confirm(
            "This exam is still in progress. Leaving now discards the answers you have not submitted. Leave anyway?",
          )
        ) {
          return;
        }
        router.push(href);
      }}
      className={cn(CONTROL)}
    >
      <Arrow />
    </button>
  );
}
