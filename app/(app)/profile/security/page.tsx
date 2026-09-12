import Link from "next/link";
import { requireProfile } from "@/lib/session";
import { AccountSecurityForm } from "@/components/account-security-form";
import { PageHeader } from "@/components/ui";

export default async function SecurityPage() {
  const { user } = await requireProfile();
  return (
    <div>
      <PageHeader title="Account security" subtitle="Manage your sign-in email and password." actions={<Link href="/profile" className="text-sm font-medium underline">Back to profile</Link>} />
      <AccountSecurityForm currentEmail={user.email} />
    </div>
  );
}
