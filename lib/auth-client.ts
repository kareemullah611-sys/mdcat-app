import { createAuthClient } from "better-auth/react";

// Uses same-origin requests + cookies; no baseURL needed in the browser.
export const authClient = createAuthClient();

export const { signIn, signUp, signOut, useSession } = authClient;