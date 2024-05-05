import Link from "next/link";
import React from "react";
import { UserNav } from "./UserNav";
import { auth } from "@/auth";
import { SignIn } from "./SignIn";



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
  const session = await auth()

  return (
    <div
      className={`flex h-16 items-center px-4 ${
        session ? "justify-between" : "justify-end"
      }`}
    >
      {session ? (
        <>
          <nav className="space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <UserNav></UserNav>
        </>
      ) : (
        <SignIn/>
      )}
    </div>
  );
}
