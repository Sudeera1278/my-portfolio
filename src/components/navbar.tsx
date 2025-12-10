"use client";

import React from "react";
import PillNav from "./PillNav";
import type { PillNavItem } from "./PillNav";

const navItems: PillNavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4 bg-transparent">
      <div className="container mx-auto flex items-center justify-between">
          <PillNav
            logo="/logo.svg" 
            items={navItems}
            baseColor="#fff"
            pillColor="rgba(255,255,255,0.1)"
            hoveredPillTextColor="#fff"
            pillTextColor="#fff"
          />
      </div>
    </header>
  );
};

export default Navbar;

    