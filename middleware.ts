import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
const { auth } = NextAuth(authConfig);

const privateRoute = ["/strategies", "/calculator", "/plgraph"];
const authRoute = ["/signin"];

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const nextPath = req.nextUrl;

  const isAuthRoute = authRoute.includes(nextPath.pathname);
  const isPrivateRoute = privateRoute.includes(nextPath.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/strategies", nextPath));
    }
    null;
  }

  if (!isLoggedIn && isPrivateRoute) {
    return NextResponse.redirect(new URL("/signin", nextPath));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
