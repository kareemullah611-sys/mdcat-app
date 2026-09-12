ALTER TABLE "Chapter" ADD COLUMN "pageStart" INTEGER;
ALTER TABLE "Chapter" ADD COLUMN "pageEnd" INTEGER;
ALTER TABLE "Question" ADD COLUMN "generationPromptVersion" TEXT;
ALTER TABLE "Question" ADD COLUMN "validationPromptVersion" TEXT;
ALTER TABLE "Question" ADD COLUMN "generationKey" TEXT;

CREATE TABLE "SyllabusVersion" (
  "id" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "authority" TEXT NOT NULL,
  "year" INTEGER NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'ACTIVE',
  "sourceUrl" TEXT NOT NULL,
  "publishedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "SyllabusVersion_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SyllabusOutcome" (
  "id" TEXT NOT NULL,
  "syllabusVersionId" TEXT NOT NULL,
  "subjectId" TEXT NOT NULL,
  "code" TEXT NOT NULL,
  "unit" TEXT NOT NULL,
  "topic" TEXT NOT NULL,
  "statement" TEXT NOT NULL,
  CONSTRAINT "SyllabusOutcome_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "QuestionMapping" ADD COLUMN "syllabusOutcomeId" TEXT;
ALTER TABLE "QuestionMapping" ADD COLUMN "sourcePageStart" INTEGER;
ALTER TABLE "QuestionMapping" ADD COLUMN "sourcePageEnd" INTEGER;

CREATE UNIQUE INDEX "SyllabusVersion_code_key" ON "SyllabusVersion"("code");
CREATE INDEX "SyllabusVersion_authority_year_status_idx" ON "SyllabusVersion"("authority", "year", "status");
CREATE UNIQUE INDEX "SyllabusOutcome_syllabusVersionId_code_key" ON "SyllabusOutcome"("syllabusVersionId", "code");
CREATE INDEX "SyllabusOutcome_subjectId_idx" ON "SyllabusOutcome"("subjectId");
CREATE INDEX "QuestionMapping_syllabusOutcomeId_idx" ON "QuestionMapping"("syllabusOutcomeId");
CREATE UNIQUE INDEX "Question_generationKey_key" ON "Question"("generationKey");

ALTER TABLE "SyllabusOutcome" ADD CONSTRAINT "SyllabusOutcome_syllabusVersionId_fkey"
  FOREIGN KEY ("syllabusVersionId") REFERENCES "SyllabusVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SyllabusOutcome" ADD CONSTRAINT "SyllabusOutcome_subjectId_fkey"
  FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "QuestionMapping" ADD CONSTRAINT "QuestionMapping_syllabusOutcomeId_fkey"
  FOREIGN KEY ("syllabusOutcomeId") REFERENCES "SyllabusOutcome"("id") ON DELETE SET NULL ON UPDATE CASCADE;
