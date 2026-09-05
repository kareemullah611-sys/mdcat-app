# MDCAT Prep App

A multi-board MDCAT and FSc exam preparation platform for Pakistan. Students study their exact board's FSc syllabus (subject-by-subject, chapter-by-chapter), practice MCQs with instant feedback, and sit timed exam-mode tests with full scoring and review.

This README covers local setup and Railway deployment. The product spec (`requirements/product-spec.md`) is the source of truth for features and roadmap.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Database:** PostgreSQL — Prisma 6 ORM (pinned; Prisma 7's adapter model is not used)
- **Auth:** Better Auth (`better-auth`) with email/password credential sessions, DB-session storage
- **Styling:** Tailwind CSS v4
- **Validation:** Zod
- **Tests:** Vitest
- **Deploy:** Railway (CI-unfriendly to Vercel for `.env` storage in this setup)

## Prerequisites

- Node.js 20+ (tested on Node 20 with npm 10)
- PostgreSQL running locally (this project uses Homebrew's `postgresql` service)

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
#   - DATABASE_URL: postgresql://kareemullah@localhost:5432/mdcat_app
#   - BETTER_AUTH_SECRET: any long random string
#   - BETTER_AUTH_URL: http://localhost:3000 in development

# 3. Create the database (one-time)
createdb mdcat_app

# 4. Apply migrations and seed reference data
npx prisma migrate deploy
npm run db:seed

# 5. Run the app
npm run dev
```

Open http://localhost:3000. Sign in with the seeded admin:

```
Email:    admin@mdcat.pk
Password: ChangeMe123!
```

### Environment variables

| Variable             | Purpose                                | Example                                          |
| -------------------- | -------------------------------------- | ------------------------------------------------ |
| `DATABASE_URL`       | Postgres connection string             | `postgresql://user@localhost:5432/mdcat_app`     |
| `BETTER_AUTH_SECRET` | Session signing secret (long & random) | —                                                |
| `BETTER_AUTH_URL`    | Absolute app URL                       | `http://localhost:3000`                          |
| `SEED_ADMIN_EMAIL`   | Seed-created admin email               | `admin@mdcat.pk`                                 |
| `SEED_ADMIN_PASSWORD`| Seed-created admin password            | change this before production                    |

## Useful commands

```bash
npm run dev          # development server
npm run build        # production build (type-checks too)
npm run start        # run the production build
npm run lint         # ESLint
npm run test         # Vitest unit tests
npm run db:seed      # reseed reference data + sample questions
npm run db:migrate   # prisma migrate dev (for schema changes)
```

## Project layout

```
prisma/            schema.prisma, migrations, seed.ts
lib/               auth, prisma client, schemas, exam engine, test service, constants
components/        shared UI + practice/exam runners + admin forms
app/(auth)/        login, signup
app/(app)/         dashboard, onboarding, study, practice, exams, test runners, result, progress, profile
app/(admin)/       admin dashboard, books → chapters/topics, questions
app/api/           auth, tests (create/answer/submit), onboarding, admin CRUD
requirements/      product-spec.md (source of truth), changelog.md, decisions.md (ADRs)
```

## Data model at a glance

- One **Question** row per concept, mapped to boards/classes through **QuestionMapping** (so a question can appear under multiple boards without duplication).
- **Test** + **TestQuestion** are immutable snapshots. `optionOrder` is stored per question so a re-render never reshuffles a student's exam.
- **AnswerHistory** is the durable per-attempt log used for scoring, streaks, and mistake-review.
- MDCAT scoring: +1 correct, −0.25 incorrect, 0 unanswered (see `lib/exam-core.ts`).

**Integrity rule:** correct answer keys never reach the browser. Exams are evaluated server-side at submit (`POST /api/tests/[testId]/submit`); practice sends per-question answers (`POST /api/tests/[testId]/answer`) and receives correctness feedback.

## Seeding your own questions

Sign in as admin → **Admin** (top-right) → **Books** to create a book, chapters, and topics, then **Questions** to add MCQs with a correct option. Questions go live for practice/exams immediately.

## Railway deployment

1. Create a Railway project and add two services:
   - **PostgreSQL** — Railway provisions the free volume.
   - **Web service** from this repo. Railway auto-detects Next.js.
2. On the web service → **Variables**, set:
   - `DATABASE_URL` = the Postgres service's connection string (Railway provides `DATABASE_URL` as a template — expand from the linked Postgres service).
   - `BETTER_AUTH_SECRET` = long random string (run `openssl rand -base64 48`).
   - `BETTER_AUTH_URL` = `https://<your-service>.up.railway.app`.
   - `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` for first deployment.
   - `NODE_ENV=production`.
3. Add a **Pre-deploy command** so migrations run before the app starts:
   ```
   npx prisma migrate deploy
   ```
4. Seed reference data once (build script already runs it; see note below):
   ```
   prisma db seed
   ```
   - The seed is **idempotent**: reference rows (boards/classes/subjects/roles) are upserted, the admin is created once, and 16 sample MCQs are inserted once (guarded by an "already seeded" marker). It is safe to run on every build, but anything up to `npm run build`'s execution isn't guaranteed — run it manually after the first successful deploy.
5. Deploy. The web service will open with `BETTER_AUTH_URL` as its own domain.

### Deploy checklist

- [ ] `DATABASE_URL` points at the Railway Postgres service
- [ ] `BETTER_AUTH_SECRET` set (sessions are invalidated if it changes)
- [ ] `BETTER_AUTH_URL` matches the public URL
- [ ] Pre-deploy command runs `npx prisma migrate deploy`
- [ ] Admin created via seed; change the default admin password after first login

## Notes / gotchas

- **Next.js 16** uses `next dev`/`next build` under Turbopack; route `params` are Promises in the App Router, handled throughout.
- **Prisma pinned at 6.x.** Do not upgrade to Prisma 7 without an ADR — its driver-adapter architecture changes how the client connects.
- **AI generation** (phases beyond 1) must not be started until the foundation + question engine are complete (spec §105).
- There is currently no `middleware.ts` — authentication gating happens at the app level via `requireProfile()`/`requireAdmin()` in `lib/session.ts`.