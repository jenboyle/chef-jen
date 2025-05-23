import Link from "next/link";

export interface navProps {
  href: string;
  children: React.ReactNode;
}

function ChefNavLink({ href, children }: navProps) {
  return (
    <Link href={href} className="hover:bg-yellow-400">
      {children}
    </Link>
  );
}

export default ChefNavLink;
