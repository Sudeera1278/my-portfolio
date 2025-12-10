"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PillNav.css";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const PillNav = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="pill-nav">
      <ul className="pill-nav-list">
        {navItems.map(item => (
          <li key={item.id} className="pill-nav-item">
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? "active" : ""}
            >
              {item.label}
            </a>
            <AnimatePresence>
              {activeId === item.id && (
                <motion.div
                  className="pill-nav-indicator"
                  layoutId="pillNavIndicator"
                  initial={false}
                  animate={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PillNav;
