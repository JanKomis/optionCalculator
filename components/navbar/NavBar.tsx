import Link from "next/link";

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

export default function NavBar() {
  return (
    <div className="flex bg-blue-500">
      {links.map((link) => (
        <Link href={link.path}>{link.name}</Link>
      ))}
      <Link href={"/login"}>Log in</Link>
      <div>User</div>
    </div>
  );
}
//{links.map((link) =>(<Link href={link.path}>{link.name}</Link>))}
