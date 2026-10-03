import { requireAdmin } from "@/lib/session";
import { McqBankLoader } from "@/components/admin/mcq-bank-loader";
import { getBankImportStatus } from "@/lib/mcq-bank-job";

/**
 * Admin: load the authored MCQ bank into this database (spec §26, §56).
 *
 * Server-rendered so the page works with JavaScript disabled for the initial
 * read; the client component drives the buttons and polls while running.
 */
export default async function AdminMcqBankPage() {
  await requireAdmin({ allowMfaEnrollment: true });
  return <McqBankLoader initialJob={getBankImportStatus()} />;
}
