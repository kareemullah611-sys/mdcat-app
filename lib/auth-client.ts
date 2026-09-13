import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields, twoFactorClient, usernameClient } from "better-auth/client/plugins";
import type { auth } from "@/lib/auth";

// Uses same-origin requests + cookies; no baseURL needed in the browser.
export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>(), usernameClient({ displayUsername: false }), twoFactorClient({ twoFactorPage: "/two-factor" })],
});

export const { signIn, signUp, signOut, useSession } = authClient;
