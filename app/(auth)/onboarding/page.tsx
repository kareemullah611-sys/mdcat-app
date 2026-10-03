import { requireUser } from "@/lib/session";
import { getOnboardingContext, getStudentProfile } from "@/lib/progress-helpers";
import { OnboardingForm } from "@/components/onboarding-form";
import { Card } from "@/components/ui";

export default async function OnboardingPage() {
  const user = await requireUser();
  const [{ boards, classes, subjects }, profile] = await Promise.all([
    getOnboardingContext(),
    // The profile is read so re-entering this page (via "Edit settings") shows
    // the current answers instead of a blank form that overwrites them.
    getStudentProfile(user.id),
  ]);
  const editing = Boolean(profile);

  return (
    <div className="mx-auto max-w-xl py-6">
      <h1 className="text-2xl font-bold">
        {editing ? "Your settings" : `Welcome, ${user.name?.split(" ")[0] ?? "student"} 👋`}
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        {editing
          ? "Change your class, board or subjects. Your saved answers are shown below."
          : "Tell us a little about yourself so we can personalize your preparation."}
      </p>
      <Card className="mt-6">
        <OnboardingForm
          boards={boards}
          classes={classes}
          subjects={subjects}
          defaults={{
            classId: profile?.classId ?? undefined,
            boardId: profile?.boardId ?? undefined,
            goal: profile?.goal ?? undefined,
            subjectIds: profile?.subjects.map((row) => row.subjectId),
          }}
          submitLabel={editing ? "Save settings" : "Continue to dashboard"}
        />
      </Card>
    </div>
  );
}
