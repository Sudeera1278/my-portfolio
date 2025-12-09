"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import "./Socials.css";

const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    width="30" 
    height="30"
  >
    <path d="M5.62 14.162c.22 1.34 1.13 2.45 2.5 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1zm7.44 0c.21 1.34 1.12 2.45 2.49 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1zm7.44 0c.21 1.34 1.12 2.45 2.5 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1z" />
  </svg>
);

const socialData = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sudeera-dilshan-0a71b927a/",
    icon: <Linkedin />,
    "data-social": "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/Sudeera1278",
    icon: <Github />,
    "data-social": "github",
  },
  {
    name: "Medium",
    href: "https://medium.com/@sudeeradilshan166",
    icon: <MediumIcon />,
    "data-social": "medium",
  },
];

const SocialLink = ({ name, href, icon, "data-social": dataSocial }: (typeof socialData)[0]) => {
  return (
    <li className="icon-content" data-social={dataSocial}>
      <a
        aria-label={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-social={dataSocial}
      >
        <div className="filled"></div>
        {icon}
      </a>
      <div className="tooltip">{name}</div>
    </li>
  );
};

const Socials = () => {
  return (
    <ul className="social-links-container example-2">
      {socialData.map((social) => (
        <SocialLink key={social.name} {...social} />
      ))}
    </ul>
  );
};

export default Socials;
