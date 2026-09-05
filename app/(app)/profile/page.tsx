import Link from "next/link";
import { requireProfile } from "@/lib/session";
import { getStudentProfile } from "@/lib/progress-helpers";
import { Card, PageHeader, Badge } from "@/components/ui";

export default async function ProfilePage() {
  const { user } = await requireProfile();
  const profile = await getStudentProfile(user.id);

  return (
    <div>
      <PageHeader title="Profile" subtitle="Your account and exam settings." />

      <Card className="max-w-xl">
        <dl className="space-y-4">
          <div>
            <dt className="text-sm font-medium text-slate-500">Name</dt>
            <dd className="font-medium text-slate-900">{user.name ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-slate-500">Email</dt>
            <dd className="font-medium text-slate-900">{user.email}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-slate-500">Board</dt>
            <dd className="font-medium text-slate-900">{profile?.board?.name ?? "Not set"}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-slate-500">Class</dt>
            <dd className="font-medium text-slate-900">{profile?.class?.name ?? "Not set"}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-slate-500">Goal</dt>
            <dd className="font-medium text-slate-900">{profile?.goal ?? "Not set"}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-slate-500">Subjects</dt>
            <dd className="mt-1 flex flex-wrap gap-2">
              {(profile?.subjects ?? []).length === 0 ? (
                <span className="text-slate-500">Not set</span>
              ) : (
                profile!.subjects.map((s) => (
                  <Badge key={s.subjectId} tone="blue">{s.subject.name}</Badge>
                ))
              )}
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <Link
            href="/onboarding"
            className="inline-flex h-10 items-center rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            Edit settings
          </Link>
        </div>
      </Card>
    </div>
  );
}