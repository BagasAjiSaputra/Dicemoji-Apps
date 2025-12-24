"use client";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import Logo from "../atoms/Logo";
import NavItem from "../molecules/DesktopMenu";
import MobileMenu from "../molecules/MobileMenu";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-300 bg-white fixed top-0 left-0">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavItem href="/" label="Home" />
            <NavItem href="/gallery" label="Gallery" />
            <NavItem href="/dicemoji" label="Dicemoji" />
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
