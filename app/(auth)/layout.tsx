import Link from "next/link";
import { BackNav } from "@/components/back-nav";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-2 flex justify-center">
          <BackNav />
        </div>
        <Link href="/" className="mb-6 block text-center text-lg font-bold text-slate-900">
          MDCAT Pakistan
        </Link>
        {children}
      </div>
    </main>
  );
}