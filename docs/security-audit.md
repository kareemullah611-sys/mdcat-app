# Security audit — MDCAT Pakistan

Scope: `/Users/kareemullah/mdcat-app` — Next.js 16.3.4 App Router, TypeScript,
Better Auth 1.7.2, Prisma 6.19.3, PostgreSQL, Railway, Docker, shared textbook
volume (`/data/textbooks`), Poppler `pdftoppm` page rendering.

Audit basis: source review of all route handlers, Server Components, auth
configuration, Prisma writes, build/deploy configuration, and dependency tree
(no live red-team testing).

## Summary

No SQL injection, no Server Actions, no raw user-content HTML rendering, no
`NEXT_PUBLIC_*` secrets, no third-party fetches, and every mutating route
enforces authentication/authorization. The main gaps are operational and
defense-in-depth: secrets/storage shipped inside the Docker image, an
unrestricted `pdftoppm` endpoint, weak trusted-origin configuration, missing
security headers, costlier inputs without caps, default admin credentials in
the seed script, and no MFA for admin access.

## Severity

- **P0 — fix now (shipped web + container):**
  1. `storage/` notebooks shipped inside the Docker image: `.dockerignore`
     omits the directory while the build `COPY . .` — the image embeds ~1.5 GB
     of copyrighted PDFs and defeats image trimming.
  2. Container runs as `root`, single-stage, no explicit OpenSSL for Prisma.
  3. `pdftoppm` render endpoint has no rate limit, no concurrency cap, no
     abort/cancellation handling, default 1 MB `maxBuffer`, and hidden
     500s/process churn under flakiness.
  4. `trustedOrigins` contains a wildcard (`https://*.up.railway.app`) and two
     dead domains; `baseURL` is not pinned to `BETTER_AUTH_URL`.
  5. No security headers at all (`next.config.ts` empty).
  6. Seed fallback password (`ChangeMe123!`) can create a super admin when
     `SEED_ADMIN_PASSWORD` is absent.
  7. No health endpoint; Railway healthcheck points at `/login` and no checks
     run with auth.
  8. `/study/book/:id` and `/study/chapter/:id` render content regardless of
     book/chapter `status` (DRAFT content visible to logged-in students via
     ID guessing) — the API file/page endpoints do filter `PUBLISHED`; the
     pages do not.

- **P1 — recommended (this pass):**
  1. No origin validation on custom mutation routes (browser SameSite cookie
     already blocks classic CSRF; add defense-in-depth origin checks).
  2. No consistent input length caps on question/option/explanation/source
     text; CSV import has no row-count/size limits (admin-gated but unbounded).
  3. `recordPracticeAnswer` writes `testQuestion.update` on a composite key
     even when the question is not in the snapshot → uncaught P2025 = 500;
     precedence is caller-only.
  4. `/practice` passes an unvalidated `count` (NaN) into the builder.
  5. No admin MFA. (better-auth 1.7.2 ships a `two-factor`/TOTP plugin.)
  6. No structured security logging; only two ad-hoc `console.error` calls.
  7. Session lifetime 30 days, no rotation (`updateAge`), broad `expiresIn`.
  8. `npm audit` reported four high-severity advisories; a previous build
     flagged OpenSSL/Prisma compatibility warnings.
  9. `Cache-Control` mixing on authenticated content; no `nosniff`.

- **P2 — documented / follow-up:**
  1. Email verification will not be enabled until an SMTP provider is
     configured (would break sign-ups today).
  2. In-memory rate limiter is per-instance; on a single-instance Railway
     deployment (single volume attach) this is effective. Revisit when scaling.
  3. Formidable password-change/kill-session UX, backup-recovery docs.

## Conventions followed by the app (good)

- 13 API route handlers; **zero** Server Actions (`"use server"` search).
- No `$queryRaw*`/`$executeRaw*` user-input SQL anywhere; Prisma client only.
- No `dangerouslySetInnerHTML`; all user/admin content rendered as text.
- No `NEXT_PUBLIC_*`; `BETTER_AUTH_SECRET` lives only in env.
- `requireApiAdmin()` per request on `app/api/admin/*`; `requireAdmin()` on the
  `(admin)` route-group layout; 403/redirect behavior correct.
- IDOR guards: test ownership checked in `submitExam`/`recordPracticeAnswer`;
  student book/file/page lookups always filter `status: "PUBLISHED"`.
- `resolveTextbookFile` validates file keys against an allowlist regex +
  rooted-path check before opening files.
- No third-party network calls server-side.

## Fix plan (implemented in this repo)

1. P0: Docker multi-stage + non-root + OpenSSL; `.dockerignore` excludes
   `storage`/PDFs; `/api/health` endpoint; no default admin credentials.
2. P0: Restrict `trustedOrigins` to exact origins; pin `baseURL`;
   7-day sessions with `updateAge`; authorise exact production origin list.
3. P0: Security headers via `next.config.ts` (CSP, HSTS, nosniff, frame,
   referrer, permissions, COOP) + cache-control refinements.
4. P0: Rate limiting (auth/admin/test/PDF) with correct client-IP handling;
   PDF render hardened (abort, `maxBuffer`, concurrency cap, in-flight
   dedupe, quality allowlist, resolvable cache dir).
5. P0: Enforce `PUBLISHED` on study pages; guard practice snapshot.
6. P1: Origin checks on all mutation routes;
   length/row/size caps on schemas + CSV import;
   structured security logging;
   MFA for admins (two-factor plugin).
7. Tests + lint/tsc + build verification + deploy.

## Design decisions & accepted risks

- Rate limiting is in-memory (per-instance); effective on the current
  single-instance topology. A PostgreSQL-backed limiter is documented for
  scale-out.
- CSP uses the documented non-nonce config (`script-src 'self' 'unsafe-inline'`,
  trusted inline styles) to avoid breaking statically-prerendered `/login` etc.
  No third-party domains are needed (app is fully self-contained).
- Admin MFA: TOTP enrollment (`/admin/2fa`), enforced on admin routes/APIs;
  admins without enrollment are shown an enrollment prompt, not locked out of
  their account login.