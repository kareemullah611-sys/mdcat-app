/**
 * Which routes show the app's back control, and where it goes.
 *
 * Kept separate from the component and free of React so the rule can be tested
 * directly: this is the part that has to stay correct as routes are added, and a
 * page that inherits a back link pointing at a route which does not exist is a
 * dead end — the exact failure the control exists to prevent.
 */

/** Destinations reachable from the navigation itself: nowhere to go back to. */
const HUBS = ["/dashboard", "/study", "/practice", "/exams", "/progress", "/admin"];

/**
 * Routes that are entry points in their own right. `/onboarding` is here because
 * it is the first screen after sign-up, and sending it to /dashboard bounces
 * straight back through `requireProfile`.
 */
const NO_BACK = [
  "/",
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/two-factor",
  "/onboarding",
];

/** Parents that are not simply "this path minus its last segment". */
const EXPLICIT_PARENTS: Record<string, string> = {
  "/tests": "/exams",
  "/profile/security": "/profile",
};

/**
 * Deeper routes whose parent segment has no page of its own.
 * `/study/book/[bookId]` strips to `/study/book`, which is not a route.
 */
const PREFIX_PARENTS: [prefix: string, parent: string][] = [
  ["/study/book/", "/study"],
  ["/study/chapter/", "/study"],
];

/** Routes a derived parent may legitimately resolve to. */
const KNOWN_ROUTES = [
  "/dashboard",
  "/study",
  "/practice",
  "/exams",
  "/progress",
  "/profile",
  "/profile/security",
  "/onboarding",
  "/admin",
  "/admin/users",
  "/admin/books",
  "/admin/questions",
  "/admin/questions/import",
  "/admin/mcq-bank",
  "/admin/2fa",
];

/** Dynamic segments that look like a path but have no page — never a parent. */
const NON_PAGE_SEGMENTS = ["/study/book", "/study/chapter"];

const DEFAULT_ROOT = "/dashboard";

export const BACK_NAV_RULES = {
  hubs: HUBS,
  noBack: NO_BACK,
  knownRoutes: KNOWN_ROUTES,
  nonPageSegments: NON_PAGE_SEGMENTS,
  defaultRoot: DEFAULT_ROOT,
} as const;

/** True when the test runner is showing, which supplies its own confirmed exit. */
function isRunner(pathname: string): boolean {
  return /^\/tests\/[^/]+$/.test(pathname);
}

/** True when a finished test's review is showing. */
function isResult(pathname: string): boolean {
  return /^\/tests\/[^/]+\/result$/.test(pathname);
}

export function backNavShowsFor(pathname: string | null): boolean {
  if (!pathname) return false;
  // Better Auth emails `/reset-password/<token>`, reached from mail, not history.
  if (pathname.startsWith("/reset-password/")) return false;
  if (isRunner(pathname)) return false;
  return !NO_BACK.includes(pathname) && !HUBS.includes(pathname);
}

export function backNavParentFor(pathname: string): string {
  // A finished test's review belongs back at the session list, not the runner.
  if (isResult(pathname)) return "/exams";
  const explicit = EXPLICIT_PARENTS[pathname];
  if (explicit) return explicit;

  for (const [prefix, parent] of PREFIX_PARENTS) {
    if (pathname.startsWith(prefix)) return parent;
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 1) {
    const candidate = `/${segments.slice(0, -1).join("/")}`;
    if (KNOWN_ROUTES.includes(candidate)) return candidate;
  }
  return DEFAULT_ROOT;
}

/** "Back to Study", "Back to Admin Questions" — used as the accessible name. */
export function backNavLabel(pathname: string): string {
  const parent = backNavParentFor(pathname);
  const words = parent.split("/").filter(Boolean);
  const target = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return `Back to ${target || "Dashboard"}`;
}
