"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="space-x-1">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          //className="text-sm font-medium transition-colors hover:text-primary bg-red-500"
          className={clsx(
            "text-sm font-medium text-primary hover:bg-accent py-2 px-4 rounded-full",
            { "bg-accent": pathname === link.path }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
