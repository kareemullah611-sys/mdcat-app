import { requireProfile } from "@/lib/session";
import { getBuilderContext } from "@/lib/builder-context";
import { getStudentProfile } from "@/lib/progress-helpers";
import { TestBuilder } from "@/components/test-builder";
import { PageHeader } from "@/components/ui";

export default async function PracticePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { user } = await requireProfile();
  const [context, profile] = await Promise.all([getBuilderContext(), getStudentProfile(user.id)]);
  const params = await searchParams;

  const defaults = {
    boardIds: params.board ? [params.board] : profile?.boardId ? [profile.boardId] : undefined,
    classIds: params.class ? [params.class] : profile?.classId ? [profile.classId] : undefined,
    subjectIds: params.subject ? [params.subject] : undefined,
    chapterIds: params.chapter ? [params.chapter] : undefined,
    count: params.count ? Number(params.count) : 8,
  };

  return (
    <div>
      <PageHeader
        title="Practice"
        subtitle="Instant-feedback MCQs. Pick your filters and start."
      />
      <TestBuilder context={context} defaultMode="PRACTICE" defaults={defaults} compact />
    </div>
  );
}