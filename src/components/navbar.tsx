"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4 bg-transparent">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-white"
          prefetch={false}
        >
          <span>Sudeera Dilshan</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="link" asChild className="text-white">
            <Link href="#about">About</Link>
          </Button>
          <Button variant="link" asChild className="text-white">
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="link" asChild className="text-white">
            <Link href="#skills">Skill</Link>
          </Button>
          <Button variant="link" asChild className="text-white">
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden text-white" variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold"
                prefetch={false}
                onClick={closeSheet}
              >
                <span>Sudeera Dilshan</span>
              </Link>
              <nav className="grid gap-2">
                <Button variant="ghost" asChild onClick={closeSheet}>
                  <Link href="#about">About</Link>
                </Button>
                <Button variant="ghost" asChild onClick={closeSheet}>
                  <Link href="#projects">Projects</Link>
                </Button>
                <Button variant="ghost" asChild onClick={closeSheet}>
                  <Link href="#skills">Skill</Link>
                </Button>
                <Button variant="ghost" asChild onClick={closeSheet}>
                  <Link href="#contact">Contact</Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
