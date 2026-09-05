import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { Card, PageHeader } from "@/components/ui";
import { QuestionImportForm } from "@/components/admin/question-import-form";

export default async function AdminImportPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  await requireAdmin();
  const { status } = await searchParams;

  const count = await prisma.question.count({
    where: status ? { status } : {},
  });

  return (
    <div>
      <PageHeader
        title="Import questions"
        subtitle={`Batch add MCQs from CSV (${count} questions ${status ? `with status "${status}"` : "total"}).`}
      />
      <Card>
        <QuestionImportForm />
      </Card>
    </div>
  );
}