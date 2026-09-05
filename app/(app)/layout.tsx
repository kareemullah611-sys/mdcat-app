import Link from "next/link";
import { requireProfile } from "@/lib/session";
import { SignOutButton } from "@/components/sign-out-button";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/study", label: "Study" },
  { href: "/practice", label: "Practice" },
  { href: "/exams", label: "Exams" },
  { href: "/progress", label: "Progress" },
];

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = await requireProfile();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
          <Link href="/dashboard" className="text-base font-bold text-slate-900">
            MDCAT Pakistan
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {user.isAdmin ? (
              <Link
                href="/admin"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              >
                Admin
              </Link>
            ) : null}
            <Link
              href="/profile"
              className="hidden h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white sm:flex"
              title={user.email}
            >
              {(user.name ?? user.email).slice(0, 1).toUpperCase()}
            </Link>
            <SignOutButton className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900" />
          </div>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-10 flex border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-medium text-slate-500",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:pb-10">
        {children}
      </main>
    </div>
  );
}