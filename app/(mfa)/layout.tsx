import { BackNav } from "@/components/back-nav";

/**
 * The MFA group has no navigation of its own, so without this the admin 2FA
 * screen is a dead end — it is not inside the (admin) layout's header.
 */
export default function MfaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-8">
      <div className="mb-4">
        <BackNav />
      </div>
      {children}
    </div>
  );
}
