import { Heading1 } from "lucide-react";
import Link from "next/link";
import React from "react";

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

const login = true;

export default function NavBar() {
  return (
    <div
      className={`flex h-16 items-center px-4 ${
        login ? "justify-between" : "justify-end"
      }`}
    >
      {login ? (
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
          <div>User</div>
        </>
      ) : (
        <Link
          href={"/login"}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Log in
        </Link>
      )}
    </div>
  );
}
