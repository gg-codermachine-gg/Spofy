import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { debug } from "util";

export const options: AuthOptions = {
  secret: process.env.AUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (
          !credentials?.email ||
          !credentials?.username ||
          !credentials?.password
        )
          return null;
        else {
          return user;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",

      profile(profile) {
        console.log("google profile", profile);
        return {
          ...profile,
          id: profile.sub,
        };
      },
    }),
  ],
  debug: false,
};
