# Backup and restore runbook

The service has two independent durable data sets: PostgreSQL records and PDF
textbooks on the Railway volume. A database backup does not contain the books;
a volume snapshot does not replace a database backup. Back up and restore both.

## Backup policy

- Enable Railway PostgreSQL backups on the production database and confirm the
  retention/expiry shown in Railway. Before migrations or a large import, also
  create an on-demand backup or logical `pg_dump` from a trusted operator host.
- Snapshot or copy `/data/textbooks` to separate durable storage. Include the
  original PDFs and an inventory containing file name, byte size, and SHA-256.
  The page-render cache may be excluded because the app can regenerate it.
- Encrypt exported backups, restrict access, and keep at least one copy outside
  the Railway project. A mounted volume is live storage, not a backup.
- Record backup time, environment, database/volume identifiers, application
  commit, checksum, encryption/key owner, retention date, and restore-test date.
- Never overwrite the only known-good backup. Do not wait for an expiry warning:
  create a replacement and verify it before the displayed expiry date.

## Database restore drill

1. Create an isolated PostgreSQL database; never test a restore over production.
2. Restore the selected Railway backup or logical dump into that database.
3. Check migration status, table counts, administrator/student relationships,
   and representative books, chapters, questions, tests, and answers.
4. Start the same application commit against the isolated database and verify
   `/api/health`, authentication, read-only study pages, and a disposable test.
5. Record duration and results, then securely destroy the isolated copy.

## Textbook restore drill

1. Restore the PDF copy into a new isolated directory or volume.
2. Verify the inventory count and every SHA-256 checksum; reject missing or
   changed files.
3. Point a non-production app instance at the restored directory and open an
   uncached first page, another page, and a byte-range PDF download.
4. Confirm the runtime user can read originals and write only where the render
   cache requires it.

## Production recovery

Declare an incident, freeze writes/imports, identify the last known-good point,
and take a preservation backup before changing anything. Restore PostgreSQL and
the textbook volume to compatible points, apply only the migrations required by
the chosen application commit, and run integrity plus smoke checks. Switch
traffic only after approval, continue monitoring, and retain the pre-recovery
evidence until the incident is closed.

Railway backup and volume capabilities vary by plan and can change. Operators
must confirm the current retention, expiry, and restore controls in the Railway
dashboard before relying on them.
