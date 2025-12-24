import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export default function NavItem({ href, label, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-gray-600"
    >
      {label}
    </Link>
  );
}
