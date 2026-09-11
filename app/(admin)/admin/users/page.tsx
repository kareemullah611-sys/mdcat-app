import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { Badge, Card, EmptyState, Input, PageHeader } from "@/components/ui";
import { ROLES, type RoleCode } from "@/lib/constants";
import { daysAgo } from "@/lib/dates";
import { buildUsersWhere, focusLabel, formatDate, formatDateTime, formatRelative, latestActivity } from "@/lib/user-admin";

const ROLE_LIST: RoleCode[] = [ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.STUDENT];

const ROLE_LABEL: Record<RoleCode, string> = {
  SUPER_ADMIN: "Super admin",
  ADMIN: "Admin",
  STUDENT: "Student",
};

const ROLE_TONE: Record<RoleCode, "slate" | "green" | "blue"> = {
  SUPER_ADMIN: "blue",
  ADMIN: "slate",
  STUDENT: "green",
};

function withParam(base: URLSearchParams, key: string, value: string): string {
  const params = new URLSearchParams(base);
  params.set(key, value);
  const query = params.toString();
  return query ? `/admin/users?${query}` : "/admin/users";
}

function withoutParam(base: URLSearchParams, key: string): string {
  const params = new URLSearchParams(base);
  params.delete(key);
  const query = params.toString();
  return query ? `/admin/users?${query}` : "/admin/users";
}

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  await requireAdmin();
  const { q, role, profile } = await searchParams;

  const qTrimmed = (q ?? "").trim();
  const activeRole = role && ROLE_LIST.includes(role as RoleCode) ? (role as RoleCode) : undefined;
  const activeProfile = profile === "COMPLETED" || profile === "PENDING" ? profile : undefined;
  const weekAgo = daysAgo(7, new Date());

  const where = buildUsersWhere({ q: qTrimmed, role: activeRole, profile: activeProfile });

  const [
    totalUsers,
    studentsCount,
    adminsCount,
    completedProfiles,
    newUsers7d,
    users,
    completedTests,
    sessionsMax,
    testsMax,
    historyMax,
    bookmarksMax,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { role: { code: ROLES.STUDENT } } }),
    prisma.user.count({ where: { role: { code: { in: [ROLES.ADMIN, ROLES.SUPER_ADMIN] } } } }),
    prisma.studentProfile.count(),
    prisma.user.count({ where: { createdAt: { gte: weekAgo } } }),
    prisma.user.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 200,
      include: {
        role: true,
        profile: { include: { board: true, class: true } },
      },
    }),
    prisma.test.groupBy({
      by: ["userId"],
      where: { status: "COMPLETED" },
      _count: { _all: true },
    }),
    prisma.session.groupBy({ by: ["userId"], _max: { updatedAt: true } }),
    prisma.test.groupBy({ by: ["userId"], _max: { submittedAt: true } }),
    prisma.answerHistory.groupBy({ by: ["userId"], _max: { createdAt: true } }),
    prisma.bookmark.groupBy({ by: ["userId"], _max: { createdAt: true } }),
  ]);

  const completedTestsByUser = new Map(completedTests.map((row) => [row.userId, row._count._all]));

  const lastActivity = latestActivity([
    ...sessionsMax.map((row) => ({ userId: row.userId, at: row._max.updatedAt })),
    ...testsMax.map((row) => ({ userId: row.userId, at: row._max.submittedAt })),
    ...historyMax.map((row) => ({ userId: row.userId, at: row._max.createdAt })),
    ...bookmarksMax.map((row) => ({ userId: row.userId, at: row._max.createdAt })),
  ]);

  const baseParams = new URLSearchParams();
  if (qTrimmed) baseParams.set("q", qTrimmed);
  if (activeRole) baseParams.set("role", activeRole);
  if (activeProfile) baseParams.set("profile", activeProfile);
  const filtersActive = baseParams.size > 0;

  return (
    <div>
      <PageHeader
        title="Users"
        subtitle={`${totalUsers} total · ${completedProfiles} completed profiles · ${newUsers7d} new in the last 7 days.`}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <Card>
          <p className="text-xs text-slate-500">Total users</p>
          <p className="mt-1 text-2xl font-bold">{totalUsers}</p>
        </Card>
        <Card>
          <p className="text-xs text-slate-500">Students</p>
          <p className="mt-1 text-2xl font-bold">{studentsCount}</p>
        </Card>
        <Card>
          <p className="text-xs text-slate-500">Admins</p>
          <p className="mt-1 text-2xl font-bold">{adminsCount}</p>
        </Card>
        <Card>
          <p className="text-xs text-slate-500">Completed profiles</p>
          <p className="mt-1 text-2xl font-bold">{completedProfiles}</p>
        </Card>
        <Card>
          <p className="text-xs text-slate-500">New registrations (7d)</p>
          <p className="mt-1 text-2xl font-bold">{newUsers7d}</p>
        </Card>
      </div>

      <div className="mt-6 space-y-4">
        <form action="/admin/users" method="get" className="flex flex-wrap items-center gap-2">
          {activeRole ? <input type="hidden" name="role" value={activeRole} /> : null}
          {activeProfile ? <input type="hidden" name="profile" value={activeProfile} /> : null}
          <div className="min-w-64 flex-1">
            <Input name="q" defaultValue={qTrimmed} placeholder="Search by name or email…" aria-label="Search users" />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Search
          </button>
          {filtersActive ? (
            <Link href="/admin/users" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Clear filters
            </Link>
          ) : null}
        </form>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500">Role:</span>
          <Link
            href={activeRole ? withoutParam(baseParams, "role") : "/admin/users"}
            className={`rounded-full px-3 py-1 font-semibold ${!activeRole ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          >
            All
          </Link>
          {ROLE_LIST.map((code) => (
            <Link
              key={code}
              href={activeRole === code ? withoutParam(baseParams, "role") : withParam(baseParams, "role", code)}
              className={`rounded-full px-3 py-1 font-semibold ${activeRole === code ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              {ROLE_LABEL[code]}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500">Profile:</span>
          <Link
            href={activeProfile ? withoutParam(baseParams, "profile") : "/admin/users"}
            className={`rounded-full px-3 py-1 font-semibold ${!activeProfile ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          >
            All
          </Link>
          {(["COMPLETED", "PENDING"] as const).map((value) => (
            <Link
              key={value}
              href={activeProfile === value ? withoutParam(baseParams, "profile") : withParam(baseParams, "profile", value)}
              className={`rounded-full px-3 py-1 font-semibold ${activeProfile === value ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              {value === "COMPLETED" ? "Completed" : "Pending"}
            </Link>
          ))}
          {filtersActive ? <span className="ml-auto text-slate-400">Showing {users.length} of {totalUsers}</span> : null}
        </div>

        {users.length === 0 ? (
          <EmptyState
            title="No users match"
            description="Try a different search or clear the active filters."
            action={
              filtersActive ? (
                <Link
                  href="/admin/users"
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                >
                  Clear filters
                </Link>
              ) : undefined
            }
          />
        ) : (
          <>
            <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white md:block">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3 font-medium">User</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Registered</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Onboarding</th>
                    <th className="px-4 py-3 font-medium">Board / Class</th>
                    <th className="px-4 py-3 font-medium">Goal</th>
                    <th className="px-4 py-3 font-medium">Tests</th>
                    <th className="px-4 py-3 font-medium">Last active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((user) => {
                    const roleCode = (user.role?.code as RoleCode) ?? ROLES.STUDENT;
                    const profile = user.profile;
                    const board = profile?.board ? profile.board.name.split(" / ")[0] : null;
                    const boardClass = profile?.class ? profile.class.name : null;
                    const goal = focusLabel(profile?.goal, profile?.preparationMode);
                    const lastActive = lastActivity.get(user.id);
                    return (
                      <tr key={user.id} className="align-top hover:bg-slate-50">
                        <td className="px-4 py-3">
                          <p className="font-medium text-slate-800">{user.name ?? "—"}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </td>
                        <td className="px-4 py-3">
                          <Badge tone={ROLE_TONE[roleCode] ?? "slate"}>{ROLE_LABEL[roleCode]}</Badge>
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-500">{user.createdAt ? formatDate(user.createdAt) : "—"}</td>
                        <td className="px-4 py-3">
                          <Badge tone={user.emailVerified ? "green" : "amber"}>
                            {user.emailVerified ? "Verified" : "Unverified"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge tone={profile ? "green" : "amber"}>{profile ? "Completed" : "Pending"}</Badge>
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-500">
                          {board ? `${board}${boardClass ? ` · ${boardClass}` : ""}` : "—"}
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-500">{goal ?? "—"}</td>
                        <td className="px-4 py-3 text-xs text-slate-500">{completedTestsByUser.get(user.id) ?? 0}</td>
                        <td
                          className="px-4 py-3 text-xs text-slate-500"
                          title={lastActive ? formatDateTime(lastActive) : undefined}
                        >
                          {lastActive ? formatRelative(lastActive) : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 md:hidden">
              {users.map((user) => {
                const roleCode = (user.role?.code as RoleCode) ?? ROLES.STUDENT;
                const profile = user.profile;
                const board = profile?.board ? profile.board.name.split(" / ")[0] : null;
                const boardClass = profile?.class ? profile.class.name : null;
                const goal = focusLabel(profile?.goal, profile?.preparationMode);
                const lastActive = lastActivity.get(user.id);
                return (
                  <Card key={user.id}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-medium text-slate-800">{user.name ?? "—"}</p>
                        <p className="truncate text-xs text-slate-500">{user.email}</p>
                      </div>
                      <Badge tone={ROLE_TONE[roleCode] ?? "slate"}>{ROLE_LABEL[roleCode]}</Badge>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge tone={user.emailVerified ? "green" : "amber"}>
                        {user.emailVerified ? "Verified" : "Unverified"}
                      </Badge>
                      <Badge tone={profile ? "green" : "amber"}>{profile ? "Onboarded" : "Onboarding pending"}</Badge>
                    </div>
                    <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-xs sm:grid-cols-3">
                      <div>
                        <dt className="text-slate-400">Registered</dt>
                        <dd className="text-slate-700">{user.createdAt ? formatDate(user.createdAt) : "—"}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400">Board / Class</dt>
                        <dd className="text-slate-700">{board ? `${board}${boardClass ? ` · ${boardClass}` : ""}` : "—"}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400">Goal</dt>
                        <dd className="text-slate-700">{goal ?? "—"}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400">Completed tests</dt>
                        <dd className="text-slate-700">{completedTestsByUser.get(user.id) ?? 0}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400">Last active</dt>
                        <dd className="text-slate-700" title={lastActive ? formatDateTime(lastActive) : undefined}>
                          {lastActive ? formatRelative(lastActive) : "—"}
                        </dd>
                      </div>
                    </dl>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}