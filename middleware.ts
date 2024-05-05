//import { auth } from "./auth";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

//export const { auth: middleware } = NextAuth(authConfig)
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("Route:", req.nextUrl.pathname);
  console.log("Logged:", isLoggedIn);
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
