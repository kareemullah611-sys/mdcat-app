# Product Changelog

Format: `YYYY-MM-DD — {ADDED | MODIFIED | REPLACED | REMOVED | ARCHITECTURAL}` — summary — affected modules.

---

## 2026-09-05 — Initial baseline

- **ADDED** — Full 106-section product specification adopted as the baseline (see `product-spec.md`).
- **ARCHITECTURAL** — V1 ships as a responsive installable PWA (web only); native iOS/Android apps deferred to a later phase. Approved 2026-09-05.
- **ARCHITECTURAL** — Stack: Next.js (App Router) + PostgreSQL (Prisma) + Tailwind CSS, deployed on Railway. Approved 2026-09-05.
- **ARCHITECTURAL** — MCQ source: hybrid of AI-generated (from board textbooks) + reconstructed PMDC-pattern past papers; AI-generated questions are never represented as actual past questions. Approved 2026-09-05.
- **ARCHITECTURAL** — Content pipeline: PDF upload → text/OCR extraction → chapter/topic structure; human review layered on automated validation ("hybrid QC"). Approved 2026-09-05.
- **ARCHITECTURAL** — Authentication via Better Auth (credential sessions stored in PostgreSQL). Approved 2026-09-05.
- **ARCHITECTURAL** — Phase ordering follows spec §105: Foundation / Question engine before Syllabus, Past Papers, AI Generation, Mastery, Tutor, Premium. Approved 2026-09-05.
- **ADDED** — Phase 1 implementation: schema, auth, onboarding, dashboard, study browser/reader, MCQ practice + exam engines with scoring, admin foundation, sample data. 2026-09-05.
- **ADDED** — Admin content management: `/admin` dashboard, `/admin/books` (book create), `/admin/books/[bookId]` (chapters + topics), `/admin/questions` (full MCQ form with dependent chapter/topic selects + validation). 2026-09-05.
- **ADDED** — Admin GET endpoints for chapters/topics (filterable by book/subject/chapter) powering the question form. 2026-09-05.
- **ADDED** — Vitest unit test suite for the exam core (`lib/__tests__/exam-core.test.ts`): shuffle, randomOptionOrder, scoreSubmission (spec §33 +1/−0.25/0), balancedSample (§76 group spread), formatDuration (§30). Extracted `EmptyPoolError` for filter-mismatch (HTTP 422). 2026-09-05.
- **FIXED** — Production build: missing `"use client"` directives on hook-using files; literal-union casts for chip filters; `topicIds` payload; React purity lint (wall-clock refs initialized in effects; auto-submit scheduled via timeout; unused imports). 2026-09-05.
- **ADDED** — `README.md` with local setup and Railway deployment notes (web service + Postgres, pre-deploy migrate, env checklist). 2026-09-05.
- **FIXED** — Seeded admin could not sign in: better-auth v1.7 reads credential accounts via `providerId === "credential" && issuer === "local:credential" && accountId === userId`; the seed previously wrote `accountId = email` with a null `issuer`. Added `issuer` to the Account model (migration `add_account_issuer`) and made the seed create/repair the credential account in better-auth's exact shape. 2026-09-05.
- **FIXED** — Runtime smoke test failures on a stale server process (an old `next-server` kept port 3000 after `pkill` only killed the npm wrapper) — kill by PID/process tree, not just the wrapper. No app change. 2026-09-05.
- **SIGNED OFF** — End-to-end smoke verification: fresh signup assigns STUDENT role via hook, onboarding completes, practice answers evaluate server-side (correct/incorrect with explanation), exam submissforms score as COMPLETED with correct/incorrect/unanswered breakdown, all key pages (test, result, dashboard, progress) render 200. 2026-09-05.
- **ADDED** — PWA installability (V1 "responsive installable PWA" ADR): `app/manifest.ts` web app manifest (standalone, portrait, theme #0f172a, 192/512 any + 512 maskable icons, practice/exam shortcuts), hand-rolled `public/sw.js` (network-first navigations with offline shell, cache-first for hashed build assets/images, no workbox), production-only registration, apple-touch icon + apple web app metas, removed Create-Next-App stock SVGs. Icons rasterized from `public/icon.svg`/`public/icon-maskable.svg` via `qlmanage` + `sips`. 2026-09-05.
- **OPEN DECISIONS** pending future phases: versioned MDCAT syllabus model (§13), past-paper acquisition/legal review (§14, §84), AI provider abstraction (§88), subscription/payment provider strategy for Pakistan (§62-63).