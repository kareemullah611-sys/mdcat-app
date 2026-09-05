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
- **SIGNED OFF** — End-to-end smoke verification: onboarding completes, practice answers evaluate server-side (correct/incorrect with explanation), exam submissions score as COMPLETED with correct/incorrect/unanswered breakdown, all key pages (test, result, dashboard, progress) render 200. Role-persistence clause withdrawn: fresh signup does NOT assign STUDENT role at this point (roleId NULL in DB); fixed 2026-09-06, see below. 2026-09-05.
- **ADDED** — PWA installability (V1 "responsive installable PWA" ADR): `app/manifest.ts` web app manifest (standalone, portrait, theme #0f172a, 192/512 any + 512 maskable icons, practice/exam shortcuts), hand-rolled `public/sw.js` (network-first navigations with offline shell, cache-first for hashed build assets/images, no workbox), production-only registration, apple-touch icon + apple web app metas, removed Create-Next-App stock SVGs. Icons rasterized from `public/icon.svg`/`public/icon-maskable.svg` via `qlmanage` + `sips`. 2026-09-05.
- **OPEN DECISIONS** pending future phases: versioned MDCAT syllabus model (§13), past-paper acquisition/legal review (§14, §84), AI provider abstraction (§88), subscription/payment provider strategy for Pakistan (§62-63).

## 2026-09-05 — Phase 2: Question Engine governance + admin override

- **ADDED** — Validation core `lib/validation.ts` (§16/§23/§25/§98): answer validity (exactly one correct §25.1), blank-option + short-question checks, quality model scoring 0-100, auto-publish gate (score ≥ 60 **and** a real explanation), normalized + approximate duplicate detection (§23.6/§23.8). Schema: `Question.duplicateOfId` self-relation + `Question.issueReason` (migration `add_question_governance`).
- **ADDED** — Admin question editing (§26): `PATCH /api/admin/questions/[id]` (full field + options + answer edits, quality recompute, status auth; accepted rule: edits to published questions auto-publish), `DELETE` restricted to DRAFT. UI: `/admin/questions/[id]` edit page with live quality score, status control, problem note, delete-draft; list page status filter chips with counts, quality badges, Edit link, row-level Publish/Disable/Archive/Delete.
- **ADDED** — CSV bulk import: `/api/admin/import` GET template + POST; RFC-4180-ish parser; per-row validation with row-numbered errors; find-or-create of Book/Chapter/Topic; valid rows publish, low-quality/explanation-less/invalid rows skipped. UI at `/admin/questions/import`.
- **ADDED** — Vitest suite `lib/__tests__/validation.test.ts` (21 tests) + CSV/import cases; 32 tests total green, lint clean, production build green.
- **VERIFIED** — Live smoke tests on `next start`: PATCH status transitions + auto-publish, PATCH invalid options rejected, DELETE published blocked, CSV import 1-valid/1-invalid row behavior, template download, import/edit pages render 200.

## 2026-09-06 — Fix: STUDENT role persisted on fresh signup

- **FIXED** — `User.roleId` is now persisted as `STUDENT` on new signups. Root cause: the `databaseHooks.user.create.before` hook in `lib/auth.ts` computed the role, but better-auth's input transform only stores fields declared in its model schema and silently dropped the undeclared `roleId` before insert. Fix: declare `roleId` under `user.additionalFields` in `lib/auth.ts` so the adapter persists it. Impact was masked at runtime because `lib/session.ts` falls back to `roleCode: user.role?.code ?? ROLES.STUDENT`, so students behaved correctly while the DB value was NULL.
- **VERIFIED** — Live `next start`: fresh `sign-up/email` → `User.roleId` = `STUDENT` (was NULL before fix); seeded admin still `SUPER_ADMIN`; 32/32 unit tests, `tsc`, lint, production build all green.
- **VERIFIED** — Variant coverage on live `next start` + system Chrome (playwright-core): (a) timed exam auto-submits on timer expiry without Submit click (timeLimit 12s → COMPLETED at ~13s, 1 correct/1 unanswered persisted correctly, 409 double-submit still blocked); (b) exam-build history filters — `NEVER_ATTEMPTED` samples only never-attempted, `INCORRECT` samples exactly the incorrect set, `BOOKMARKED` samples exactly the bookmarked set, each persisted as `Test.historyFilter`; full-attended/`INCORRECT`-empty pools → HTTP 422; `MIXED` control unaffected; (c) mobile (iPhone 390×844) dashboard/practice/exams/progress/exam pages: zero horizontal overflow, assessment-palette grid + bottom nav render; desktop 1280: header nav + aside palette render.