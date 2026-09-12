# Architectural Decision Records

## ADR-001 — V1 platform: responsive web PWA (no native apps)

- **Status:** Accepted (2026-09-05)
- **Context:** The spec requires desktop, tablet, Android and iPhone support and installable PWA behaviour (§5).
- **Decision:** V1 is a single responsive Next.js web app exposed as an installable PWA. Native iOS/Android apps are deferred.
- **Alternatives considered:** Flutter app, React Native app, native + web dual-build.
- **Consequence:** Covers all platforms at ~⅓ the build cost of a parallel native app. PWA offline/snapshot features are built in Phase 9 per spec ordering.

## ADR-002 — Stack: Next.js + PostgreSQL (Prisma) + Tailwind on Railway

- **Status:** Accepted (2026-09-05)
- **Context:** Founder is non-technical; cost and maintainability matter more than scale at this stage.
- **Decision:** Next.js App Router (TypeScript) + PostgreSQL via Prisma 6 + Tailwind CSS v4. Deploy to Railway (user-mandated) rather than Vercel.
- **Alternatives considered:** Vercel (rejected by user), Supabase-only, Django/FastAPI backends.
- **Consequence:** Single language across server/client; local dev uses Homebrew PostgreSQL. Railway services: `web` (Next.js) + `postgres` (managed); `DATABASE_URL` injected.

## ADR-003 — Auth: Better Auth with credential sessions

- **Status:** Accepted (2026-09-05)
- **Context:** Need secure email/password auth, DB-backed sessions, role support, Next.js App Router integration (§64-65).
- **Decision:** Better Auth with the Prisma adapter; sessions/accounts stored in PostgreSQL. Roles added as a `Role` table (not enums). Onboarding extends the default `User` with a `StudentProfile`.
- **Alternatives considered:** NextAuth/Auth.js v5, hand-rolled JWT. 
- **Consequence:** Minimal auth code; DB session store works on Railway without external session services. Roles/claims are read server-side per request.

## ADR-004 — Board filter is a syllabus/edition mapping, not 30 independent question banks

- **Status:** Accepted (2026-09-05)
- **Context:** All five boards follow the same national curriculum; MDCAT is a single national paper. Duplicating per-board content is ~60% redundant.
- **Decision:** One `Question` row per concept with a `QuestionMapping` join row per board/chapter/topic/concept/learning-outcome (spec §72). Primary `boardId` on the question is the source board; mapping rows cover the rest.
- **Alternatives considered:** Fully independent per-board banks (rejected: cost + inconsistency).
- **Consequence:** Cross-board and "all boards" tests share rows without duplication (§73). Chapter numbering is per-board, never assumed identical (§12).

## ADR-005 — Phase 1 content is seeded sample data (admin-entered)

- **Status:** Accepted (2026-09-05)
- **Context:** Spec §105 says build the engine before AI generation/ingestion; a usable demo needs some MCQs.
- **Decision:** Seed ~16 obviously-correct, standard questions linked to Punjab XI sample books/chapters, `sourceType=ADMIN_CREATED`, clearly labelled sample. Real content enters through admin (now) and the ingestion pipeline (Phase 3).
- **Consequence:** Engine is testable immediately; sample content is never labelled as textbook/past-paper content.

## ADR-006 — Question types/sources/scores are string columns, not lookup tables (Phase 1)

- **Status:** Accepted (2026-09-05)
- **Context:** Spec §70 wants reference tables over enums to avoid code changes on expansion.
- **Decision:** Use bounded string columns (`questionType`, `sourceType`, `difficulty`, `status`, `mdcatRelevanceScore`, `qualityScore`) rather than Postgres enums. Codes are centralized in one typed constants module so expansion (e.g. `ENGLISH`, `LOGICAL_REASONING`, `BOARD_PAST_PAPER`) is a single-file addition.
- **Alternatives considered:** Postgres enums (rejected: migration-heavy), full lookup tables (deferred until those entities get their own attributes, e.g. syllabus versions with years).
- **Consequence:** No enum migrations; a minor departure from §70 in the smallest-scalable direction, mitigated by a single typed source of truth. Revisit when syllable/versioning lands (Phase on syllabus).

## ADR-007 — Test engine persists immutable per-attempt snapshots

- **Status:** Accepted (2026-09-05)
- **Context:** A student's exam result must stay reproducible even if the bank changes (§75, §106.9).
- **Decision:** `Test` keeps the filter snapshot (arrays of ids) and `TestQuestion` stores the presented option order per question. Submissions create durable `AnswerHistory` rows.
- **Consequence:** Historical results survive question edits/removal; later phases (mistakes, mastery, tutor) read `AnswerHistory` rather than live question rows.

## ADR-008 — Versioned PMDC syllabus and grounded MCQ provenance

- **Status:** Accepted (2026-09-13)
- **Context:** The MCQ pipeline must validate against a named current syllabus and retain cross-board textbook support without duplicating a question.
- **Decision:** Store PMDC curriculum releases in `SyllabusVersion`/`SyllabusOutcome`; map every generated question to an outcome and one or more board chapters through `QuestionMapping`, including source page ranges. Use stable `generationKey` values for idempotent imports and record generation/validation prompt versions. The Biology XI pilot uses the PMDC final MDCAT 2025 curriculum because it is the latest final curriculum published by PMDC at implementation time.
- **Consequence:** A newer PMDC curriculum can be seeded and activated without rewriting historical mappings. Generated content is reproducible, auditable and safe to re-import.
