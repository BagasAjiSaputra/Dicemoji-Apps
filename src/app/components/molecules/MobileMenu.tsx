import NavItem from "./DesktopMenu";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden pb-4 flex items-center flex-col gap-3 text-sm">
      <NavItem href="/" label="Home" onClick={onClose} />
      <NavItem href="/gallery" label="Gallery" onClick={onClose} />
      <NavItem href="/dicemoji" label="Dicemoji" onClick={onClose} />
    </nav>
  );
}
