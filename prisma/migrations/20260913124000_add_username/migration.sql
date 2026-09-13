-- Existing accounts remain nullable. New email registrations require a
-- normalized username in the Better Auth request boundary.
ALTER TABLE "User" ADD COLUMN "username" TEXT;

-- Functional uniqueness closes both mixed-case and concurrent-insert races,
-- even if a future writer bypasses application normalization.
CREATE UNIQUE INDEX "User_username_ci_key" ON "User"(LOWER("username"));
CREATE INDEX "User_username_lookup_idx" ON "User"("username");
