import { requireAdmin } from "@/lib/session";
import TwoFactorEnrollment from "./two-factor-enrollment";

export default async function AdminTwoFactorPage() {
  const admin = await requireAdmin({ allowMfaEnrollment: true });
  return <TwoFactorEnrollment enabled={admin.twoFactorEnabled} />;
}
