import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const providers: Provider[] = [Google];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export default {
  providers,
  pages: {
    signIn: "/signin",
  },
} satisfies NextAuthConfig;
