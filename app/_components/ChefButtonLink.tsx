import Link from "next/link";

interface buttonProps {
  href: string;
  children: React.ReactNode;
}
function ChefButtonLink({ href, children }: buttonProps) {
  return (
    <Link
      href={href}
      className="bg-yellow-100 p-2 md:p-4 rounded-2xl text-xl hover:bg-yellow-400"
    >
      {children}
    </Link>
  );
}

export default ChefButtonLink;
