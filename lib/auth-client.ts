import { createAuthClient } from "better-auth/react";
import { twoFactorClient } from "better-auth/client/plugins";

// Uses same-origin requests + cookies; no baseURL needed in the browser.
export const authClient = createAuthClient({
  plugins: [twoFactorClient({ twoFactorPage: "/two-factor" })],
});

export const { signIn, signUp, signOut, useSession } = authClient;
