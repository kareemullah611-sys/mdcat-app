import { describe, expect, it } from "vitest";
import { BACK_NAV_RULES, backNavLabel, backNavParentFor, backNavShowsFor } from "@/lib/back-nav-rules";

/**
 * The back control is derived from the pathname rather than declared per page,
 * so these tests are the specification: a route added later must resolve to a
 * parent that actually exists.
 */

describe("backNavShowsFor", () => {
  it("hides on top-level destinations, which are reachable from the nav", () => {
    for (const hub of ["/dashboard", "/study", "/practice", "/exams", "/progress", "/admin"]) {
      expect(backNavShowsFor(hub)).toBe(false);
    }
  });

  it("hides on public entry points and the password-reset link", () => {
    for (const path of ["/", "/login", "/signup", "/forgot-password", "/two-factor", "/onboarding", "/reset-password/abc123"]) {
      expect(backNavShowsFor(path)).toBe(false);
    }
  });

  it("hides on a test runner, which owns its own confirmed exit", () => {
    expect(backNavShowsFor("/tests/cmus123")).toBe(false);
  });

  it("shows on every drilled-into route", () => {
    for (const path of [
      "/study/book/abc",
      "/study/chapter/abc",
      "/profile",
      "/profile/security",
      "/tests/cmus123/result",
      "/admin/users",
      "/admin/books/abc",
      "/admin/questions/abc",
      "/admin/questions/import",
      "/admin/mcq-bank",
      "/admin/2fa",
    ]) {
      expect(backNavShowsFor(path)).toBe(true);
    }
  });

  it("defaults to showing on an unknown future route", () => {
    expect(backNavShowsFor("/some/future/page")).toBe(true);
  });
});

describe("backNavParentFor", () => {
  it("resolves the parent routes that have no index page", () => {
    // /study/book and /study/chapter are dynamic segments, not pages.
    expect(backNavParentFor("/study/book/abc")).toBe("/study");
    expect(backNavParentFor("/study/chapter/abc")).toBe("/study");
  });

  it("sends a finished test back to the exam list, not the runner", () => {
    expect(backNavParentFor("/tests/cmus123/result")).toBe("/exams");
  });

  it("uses the explicit parents where the parent segment is not the right target", () => {
    expect(backNavParentFor("/tests")).toBe("/exams");
    expect(backNavParentFor("/profile/security")).toBe("/profile");
  });

  it("strips one segment for ordinary nested routes", () => {
    expect(backNavParentFor("/admin/books/abc")).toBe("/admin/books");
    expect(backNavParentFor("/admin/questions/abc")).toBe("/admin/questions");
    expect(backNavParentFor("/admin/users")).toBe("/admin");
  });

  it("falls back to the dashboard rather than to a route that does not exist", () => {
    expect(backNavParentFor("/some/future/deep/page")).toBe("/dashboard");
    expect(backNavParentFor("/onboarding")).toBe("/dashboard");
  });

  it("never resolves to a dynamic segment that has no page", () => {
    for (const path of ["/study/book/abc", "/study/chapter/abc", "/tests/abc/result"]) {
      expect(BACK_NAV_RULES.nonPageSegments).not.toContain(backNavParentFor(path));
    }
  });
});

describe("backNavLabel", () => {
  it("is a properly cased accessible name", () => {
    // Only non-hub routes render the control, so the label is asserted for those.
    expect(backNavLabel("/tests/abc/result")).toBe("Back to Exams");
    expect(backNavLabel("/admin/questions/import")).toBe("Back to Admin Questions");
    expect(backNavLabel("/profile/security")).toBe("Back to Profile");
    expect(backNavLabel("/study/book/abc")).toBe("Back to Study");
    expect(backNavLabel("/profile")).toBe("Back to Dashboard");
  });
});
