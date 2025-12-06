"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const MediumIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M5.62 14.162c.22 1.34 1.13 2.45 2.5 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1zm7.44 0c.21 1.34 1.12 2.45 2.49 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1zm7.44 0c.21 1.34 1.12 2.45 2.5 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1z" />
    </svg>
);


const Footer = () => {
  return (
    <footer className="w-full py-8 bg-background border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Sudeera Dilshan. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/Sudeera1278" className="text-muted-foreground hover:text-white transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/sudeera-dilshan-0a71b927a/"

 className="text-muted-foreground hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="" className="text-muted-foreground hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="https://medium.com/@sudeeradilshan166" className="text-muted-foreground hover:text-white transition-colors">
            <MediumIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
