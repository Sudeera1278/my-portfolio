"use client";

import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-background border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Sudeera Dilshan. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
