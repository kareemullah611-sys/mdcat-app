import { requireAdmin } from "@/lib/session";
import TwoFactorEnrollment from "./two-factor-enrollment";

export default async function AdminTwoFactorPage() {
  const admin = await requireAdmin({ allowMfaEnrollment: true });
  // The (mfa) layout supplies the back control, since this route sits outside
  // the admin layout and has no nav of its own.
  return <TwoFactorEnrollment enabled={admin.twoFactorEnabled} />;
}
