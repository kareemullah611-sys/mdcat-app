-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "duplicateOfId" TEXT,
ADD COLUMN     "issueReason" TEXT;

-- CreateIndex
CREATE INDEX "Question_duplicateOfId_idx" ON "Question"("duplicateOfId");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_duplicateOfId_fkey" FOREIGN KEY ("duplicateOfId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
