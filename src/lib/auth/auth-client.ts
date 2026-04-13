import { createAuthClient } from "better-auth/react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { twoFactorClient } from "better-auth/plugins/two-factor";
=======
>>>>>>> d39f2f4aeb9cd40cab58fd3905c9ec1f88b910fc
>>>>>>> ccd560e (clean commit (removed secrets))

const baseURL =
  (typeof import.meta !== "undefined" &&
    (import.meta as any).env?.VITE_BETTER_AUTH_URL) ||
  process.env.BETTER_AUTH_URL ||
  "/api/auth";

export const authClient = createAuthClient({
  baseURL,
<<<<<<< HEAD
});

export const { signIn, signOut, signUp, useSession, getSession } = authClient;
=======
<<<<<<< HEAD
  plugins: [twoFactorClient()],
});

export const { signIn, signOut, signUp, useSession, getSession, twoFactor } =
  authClient;
=======
});

export const { signIn, signOut, signUp, useSession, getSession } = authClient;
>>>>>>> d39f2f4aeb9cd40cab58fd3905c9ec1f88b910fc
>>>>>>> ccd560e (clean commit (removed secrets))
