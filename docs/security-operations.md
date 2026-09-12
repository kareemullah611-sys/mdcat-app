# Security operations

This runbook covers the production MDCAT application on Railway. It complements
`docs/security-audit.md`; it does not replace Railway's access controls or the
incident procedures of the organization operating the service.

## Production configuration

- Keep `BETTER_AUTH_SECRET`, `DATABASE_URL`, `DIRECT_URL`, and
  `SEED_ADMIN_PASSWORD` only in Railway secret variables. Never expose them as
  `NEXT_PUBLIC_*`, commit them, or paste them into logs or support messages.
- Set `BETTER_AUTH_URL` to the exact public HTTPS origin. Add only exact,
  currently-used HTTPS origins to `TRUSTED_ORIGINS`.
- Mount the Railway volume at `/data/textbooks` and set `TEXTBOOK_STORAGE_DIR`
  accordingly. Keep the rendered-page cache on the volume only if its growth is
  monitored; cached pages can be regenerated and are not backup-critical.
- Grant Railway workspace and Git hosting access using individual accounts and
  least privilege. Remove former operators immediately and review access monthly.
- Never run the production seed without a unique `SEED_ADMIN_PASSWORD`. Remove
  the variable after controlled bootstrap if the seed will not be run again.

## Routine checks

Weekly: confirm `/api/health` returns HTTP 200 without secrets, inspect failed
deployments and security event counts, check volume/database usage, and review
dependency advisories. Monthly: rotate operator credentials where appropriate,
review administrators and Railway members, restore a backup in an isolated
environment, and delete obsolete textbook render-cache files.

Security logs are one-line JSON. Monitor `auth.failure`,
`security.origin_mismatch`, `security.rate_limited`,
`textbook.suspicious_request`, and repeated `admin.csv_import_rejected` events.
Logs intentionally exclude passwords, cookies, tokens, request bodies, raw IP
addresses, and database errors. Retain logs according to the operator's privacy
policy and restrict them to administrators.

## Administrator MFA

Production requires admin MFA unless `ADMIN_MFA_REQUIRED=false` is deliberately
set for the short database-migration window. After the MFA migration is applied,
remove that override (or set it to `true`). Each administrator enrolls at
`/admin/2fa`, verifies a TOTP code, and stores the one-time recovery codes
offline. Do not email, screenshot, or paste the TOTP URI or recovery codes.

If an administrator loses the authenticator, use a recovery code. If all codes
are lost, a second authorized operator must verify the person's identity, take a
fresh database backup, revoke the user's sessions, delete only that user's
`TwoFactor` row, and set that user's `twoFactorEnabled` to false in one database
transaction. Record the incident and have the user immediately sign in and
re-enroll. Never disable the production MFA feature globally to recover one user.

## Incident response

1. Contain: disable the affected account, revoke sessions, restrict the service
   if necessary, and preserve Railway deploy/application logs.
2. Rotate exposed credentials from Railway: authentication secret, database
   credentials, admin credentials, and any Git/deployment tokens. A rotated
   authentication secret invalidates existing sessions.
3. Investigate using timestamps, fixed event names, deploy IDs, and database
   audit evidence. Do not copy production personal data into tickets or chats.
4. Recover from a known-good commit and verified backup. Run the verification
   gate and health/read-only smoke tests before reopening access.
5. Document impact, affected users/data, timeline, root cause, and prevention.
   Follow applicable breach-notification law and organizational policy.

## Release gate

Before deployment run `npx tsc --noEmit`, `npm run lint`, `npx vitest run`,
`npm run build`, `npm audit --omit=dev`, and `git diff --check`. Apply database
migrations in a maintenance window, take a fresh backup first, and keep schema
changes separate from unrelated application hardening. After deployment verify
health, login, admin authorization, one uncached reader page, byte-range PDF
download, and one non-destructive student test flow.
