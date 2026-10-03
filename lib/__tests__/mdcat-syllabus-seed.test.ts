import { describe, expect, it, vi } from "vitest";
import { MDCAT_2025_OUTCOMES } from "@/lib/data/mdcat-2025-curriculum";
import { MDCAT_SYLLABUS_CODE, MDCAT_SYLLABUS_OFFICIAL_TOTAL } from "@/lib/constants";

vi.mock("@/lib/prisma", () => ({ prisma: {} }));

const { seedMdcatSyllabus2025 } = await import("@/lib/data/mdcat-syllabus-seed");

type OutcomeRow = { code: string; unit: string; topic: string; statement: string; subjectId: string };

/** A minimal in-memory stand-in for the two tables the seed touches. */
function fakeDb(existing: Record<string, OutcomeRow[]> = {}) {
  const store: Record<string, OutcomeRow[]> = JSON.parse(JSON.stringify(existing));
  const calls = { upserts: 0 };
  const db = {
    syllabusVersion: {
      upsert: async ({ create }: { create: { code: string } }) => ({ id: "syllabus-1", code: create.code }),
    },
    subject: { findUnique: async ({ where }: { where: { code: string } }) => ({ id: `subject-${where.code}` }) },
    syllabusOutcome: {
      findMany: async ({ where }: { where: { subjectId: string } }) =>
        store[where.subjectId] ?? [],
      upsert: async ({ where, create }: { where: { syllabusVersionId_code: { code: string } }; create: OutcomeRow }) => {
        calls.upserts += 1;
        const code = where.syllabusVersionId_code.code;
        const rows = store[create.subjectId] ?? (store[create.subjectId] = []);
        const index = rows.findIndex((row) => row.code === code);
        if (index >= 0) rows[index] = create;
        else rows.push(create);
        return create;
      },
    },
  };
  return { db: db as never, store, calls };
}

describe("seedMdcatSyllabus2025", () => {
  it("seeds every official outcome for the active syllabus", async () => {
    const { db, store } = fakeDb();
    const result = await seedMdcatSyllabus2025(db);

    expect(result.code).toBe(MDCAT_SYLLABUS_CODE);
    expect(result.total).toBe(MDCAT_SYLLABUS_OFFICIAL_TOTAL);
    expect(result.created).toBe(MDCAT_SYLLABUS_OFFICIAL_TOTAL);
    const stored = Object.values(store).flat();
    expect(stored).toHaveLength(MDCAT_SYLLABUS_OFFICIAL_TOTAL);
  });

  it("counts only genuinely new outcomes as created", async () => {
    // The production failure this guards: a database seeded from an older,
    // partial curriculum snapshot must report what it is missing.
    const biology = MDCAT_2025_OUTCOMES.BIOLOGY;
    const partial: Record<string, OutcomeRow[]> = {
      "subject-BIOLOGY": biology.slice(0, 10).map((outcome) => ({
        code: outcome.code,
        unit: outcome.unit,
        topic: outcome.topic ?? "",
        statement: outcome.statement,
        subjectId: "subject-BIOLOGY",
      })),
    };

    const { db } = fakeDb(partial);
    const result = await seedMdcatSyllabus2025(db);

    expect(result.total).toBe(MDCAT_SYLLABUS_OFFICIAL_TOTAL);
    expect(result.created).toBe(MDCAT_SYLLABUS_OFFICIAL_TOTAL - 10);
  });

  it("is idempotent: a second run creates nothing and changes no ids", async () => {
    const { db } = fakeDb();
    await seedMdcatSyllabus2025(db);
    const second = await seedMdcatSyllabus2025(db);
    expect(second.created).toBe(0);
    expect(second.total).toBe(MDCAT_SYLLABUS_OFFICIAL_TOTAL);
  });

  it("fails loudly when a subject row is missing", async () => {
    const db = {
      syllabusVersion: { upsert: async () => ({ id: "s", code: MDCAT_SYLLABUS_CODE }) },
      subject: { findUnique: async () => null },
      syllabusOutcome: { findMany: async () => [], upsert: async () => ({}) },
    };
    await expect(seedMdcatSyllabus2025(db as never)).rejects.toThrow(/BIOLOGY is missing/);
  });
});
