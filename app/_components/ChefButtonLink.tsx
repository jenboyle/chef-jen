import Link from "next/link";

interface buttonProps {
  href: string;
  children: React.ReactNode;
}
function ChefButtonLink({ href, children }: buttonProps) {
  return (
    <Link
      href={href}
      className="bg-emerald-200 p-4 rounded-2xl text-xl hover:bg-emerald-500"
    >
      {children}
    </Link>
  );
}

export default ChefButtonLink;
