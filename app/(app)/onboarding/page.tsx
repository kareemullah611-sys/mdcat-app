import { requireUser } from "@/lib/session";
import { getOnboardingContext } from "@/lib/progress-helpers";
import { OnboardingForm } from "@/components/onboarding-form";
import { Card } from "@/components/ui";

export default async function OnboardingPage() {
  const user = await requireUser();
  const { boards, classes, subjects } = await getOnboardingContext();

  return (
    <div className="mx-auto max-w-xl py-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name?.split(" ")[0] ?? "student"} 👋</h1>
      <p className="mt-1 text-sm text-slate-500">
        Tell us a little about yourself so we can personalize your preparation.
      </p>
      <Card className="mt-6">
        <OnboardingForm boards={boards} classes={classes} subjects={subjects} />
      </Card>
    </div>
  );
}