import React from "react";
import { UserNav } from "./UserNav";
import { auth } from "@/auth";
import { SignIn } from "./SignIn";
import NavLinks from "./NavLinks";
import clsx from "clsx";
import { SessionProvider } from "next-auth/react";

const links = [
  {
    name: "Calculator",
    path: "/calculator",
  },
  {
    name: "Strategies",
    path: "/strategies",
  },
  {
    name: "P/L Graph",
    path: "/plgraph",
  },
];

export default async function NavBar() {
  const session = await auth();

  return (
    <div
      className={clsx("flex h-16 items-center px-4", {
        "justify-between": session,
        "justify-end": !session,
      })}
    >
      {session ? (
        <>
          <NavLinks></NavLinks>
          <UserNav></UserNav>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
