import type { GroundedMcq } from "../../mcq-pipeline";
import type { BankSubject } from "./coverage";
import { biologyXiBatch1 } from "./biology/bio-xi-b1";
import { biologyXiBatch2 } from "./biology/bio-xi-b2";
import { biologyXiBatch3 } from "./biology/bio-xi-b3";
import { biologyXiBatch4 } from "./biology/bio-xi-b4";
import { biologyXiBatch5 } from "./biology/bio-xi-b5";
import { chemistryXiBatch1 } from "./chemistry/chem-xi-b1";
import { chemistryXiBatch2 } from "./chemistry/chem-xi-b2";
import { chemistryXiBatch3 } from "./chemistry/chem-xi-b3";
import { chemistryXiBatch4 } from "./chemistry/chem-xi-b4";
import { chemistryXiBatch5 } from "./chemistry/chem-xi-b5";
import { physicsXiBatch1 } from "./physics/phy-xi-b1";
import { physicsXiBatch2 } from "./physics/phy-xi-b2";
import { physicsXiBatch3 } from "./physics/phy-xi-b3";
import { physicsXiBatch4 } from "./physics/phy-xi-b4";
import { physicsXiBatch5 } from "./physics/phy-xi-b5";
import { biologyXiiBatch1 } from "./biology/bio-xii-b1";
import { biologyXiiBatch2 } from "./biology/bio-xii-b2";
import { biologyXiiBatch3 } from "./biology/bio-xii-b3";
import { biologyXiiBatch4 } from "./biology/bio-xii-b4";
import { biologyXiiBatch5 } from "./biology/bio-xii-b5";
import { chemistryXiiBatch1 } from "./chemistry/chem-xii-b1";
import { chemistryXiiBatch2 } from "./chemistry/chem-xii-b2";
import { chemistryXiiBatch3 } from "./chemistry/chem-xii-b3";
import { chemistryXiiBatch4 } from "./chemistry/chem-xii-b4";
import { chemistryXiiBatch5 } from "./chemistry/chem-xii-b5";
import { physicsXiiBatch1 } from "./physics/phy-xii-b1";
import { physicsXiiBatch2 } from "./physics/phy-xii-b2";
import { physicsXiiBatch3 } from "./physics/phy-xii-b3";
import { physicsXiiBatch4 } from "./physics/phy-xii-b4";
import { physicsXiiBatch5 } from "./physics/phy-xii-b5";

/**
 * Target size and difficulty mix for one 100-question batch (§87 — the values
 * live here so a future bank size change is a data change, not a code change).
 */
export const BATCH_TARGET_SIZE = 100;
export const BATCH_DIFFICULTY_TARGETS = { EASY: 15, MEDIUM: 70, HARD: 15 } as const;
export const SUBJECT_BATCH_TARGET_SIZE = 500;

export type BankBatch = {
  code: string;
  subject: BankSubject;
  /** Textbook year the batch was authored against (spec §12, §28). */
  grade: 11 | 12;
  questions: GroundedMcq[];
};

export const BANK_BATCHES: BankBatch[] = [
  { grade: 11, code: "bio-xi-b1", subject: "BIOLOGY", questions: biologyXiBatch1 },
  { grade: 11, code: "bio-xi-b2", subject: "BIOLOGY", questions: biologyXiBatch2 },
  { grade: 11, code: "bio-xi-b3", subject: "BIOLOGY", questions: biologyXiBatch3 },
  { grade: 11, code: "bio-xi-b4", subject: "BIOLOGY", questions: biologyXiBatch4 },
  { grade: 11, code: "bio-xi-b5", subject: "BIOLOGY", questions: biologyXiBatch5 },
  { grade: 11, code: "chem-xi-b1", subject: "CHEMISTRY", questions: chemistryXiBatch1 },
  { grade: 11, code: "chem-xi-b2", subject: "CHEMISTRY", questions: chemistryXiBatch2 },
  { grade: 11, code: "chem-xi-b3", subject: "CHEMISTRY", questions: chemistryXiBatch3 },
  { grade: 11, code: "chem-xi-b4", subject: "CHEMISTRY", questions: chemistryXiBatch4 },
  { grade: 11, code: "chem-xi-b5", subject: "CHEMISTRY", questions: chemistryXiBatch5 },
  { grade: 11, code: "phy-xi-b1", subject: "PHYSICS", questions: physicsXiBatch1 },
  { grade: 11, code: "phy-xi-b2", subject: "PHYSICS", questions: physicsXiBatch2 },
  { grade: 11, code: "phy-xi-b3", subject: "PHYSICS", questions: physicsXiBatch3 },
  { grade: 11, code: "phy-xi-b4", subject: "PHYSICS", questions: physicsXiBatch4 },
  { grade: 11, code: "phy-xi-b5", subject: "PHYSICS", questions: physicsXiBatch5 },
  { grade: 12, code: "bio-xii-b1", subject: "BIOLOGY", questions: biologyXiiBatch1 },
  { grade: 12, code: "bio-xii-b2", subject: "BIOLOGY", questions: biologyXiiBatch2 },
  { grade: 12, code: "bio-xii-b3", subject: "BIOLOGY", questions: biologyXiiBatch3 },
  { grade: 12, code: "bio-xii-b4", subject: "BIOLOGY", questions: biologyXiiBatch4 },
  { grade: 12, code: "bio-xii-b5", subject: "BIOLOGY", questions: biologyXiiBatch5 },
  { grade: 12, code: "chem-xii-b1", subject: "CHEMISTRY", questions: chemistryXiiBatch1 },
  { grade: 12, code: "chem-xii-b2", subject: "CHEMISTRY", questions: chemistryXiiBatch2 },
  { grade: 12, code: "chem-xii-b3", subject: "CHEMISTRY", questions: chemistryXiiBatch3 },
  { grade: 12, code: "chem-xii-b4", subject: "CHEMISTRY", questions: chemistryXiiBatch4 },
  { grade: 12, code: "chem-xii-b5", subject: "CHEMISTRY", questions: chemistryXiiBatch5 },
  { grade: 12, code: "phy-xii-b1", subject: "PHYSICS", questions: physicsXiiBatch1 },
  { grade: 12, code: "phy-xii-b2", subject: "PHYSICS", questions: physicsXiiBatch2 },
  { grade: 12, code: "phy-xii-b3", subject: "PHYSICS", questions: physicsXiiBatch3 },
  { grade: 12, code: "phy-xii-b4", subject: "PHYSICS", questions: physicsXiiBatch4 },
  { grade: 12, code: "phy-xii-b5", subject: "PHYSICS", questions: physicsXiiBatch5 },
];

export function batchesForSubject(subject: BankSubject, grade?: 11 | 12): BankBatch[] {
  return BANK_BATCHES.filter((batch) => batch.subject === subject && (grade === undefined || batch.grade === grade));
}

export function bankQuestions(subject: BankSubject, grade?: 11 | 12): GroundedMcq[] {
  return batchesForSubject(subject, grade).flatMap((batch) => batch.questions);
}