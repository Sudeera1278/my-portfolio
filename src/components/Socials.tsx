"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import "./Socials.css";

const MediumIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M5.62 14.162c.22 1.34 1.13 2.45 2.5 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1zm7.44 0c.21 1.34 1.12 2.45 2.49 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1zm7.44 0c.21 1.34 1.12 2.45 2.5 2.45a2.5 2.5 0 0 0 2.5-2.5v-7.1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v7.1z" />
  </svg>
);

const socialData = [
  {
    href: "https://www.linkedin.com/in/sudeera-dilshan-0a71b927a/",
    icon: <Linkedin />,
    text: "LinkedIn",
    userInitial: "SD",
    userName: "Sudeera Dilshan",
    userHandle: "@sudeera-dilshan",
    about: "500+ Connections",
    color: "#4267B2",
  },
  {
    href: "https://github.com/Sudeera1278",
    icon: <Github />,
    text: "GitHub",
    userInitial: "SD",
    userName: "Sudeera Dilshan",
    userHandle: "@Sudeera1278",
    about: "100+ Repositories",
    color: "#333",
  },
  {
    href: "#",
    icon: <Twitter />,
    text: "Twitter",
    userInitial: "SD",
    userName: "Sudeera Dilshan",
    userHandle: "@SudeeraDev",
    about: "1k+ Followers",
    color: "#1DA1F2",
  },
  {
    href: "https://medium.com/@sudeeradilshan166",
    icon: <MediumIcon />,
    text: "Medium",
    userInitial: "SD",
    userName: "Sudeera Dilshan",
    userHandle: "@sudeeradilshan166",
    about: "50+ Articles",
    color: "#000",
  },
];

const SocialLink = ({
  href,
  icon,
  text,
  userInitial,
  userName,
  userHandle,
  about,
  color,
}: (typeof socialData)[0]) => {
    const iconStyle = {
        color: color,
        borderColor: color,
        fill: color,
    }

    const layerSpanStyle = {
        borderColor: color
    }
    
    return (
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img" style={{borderColor: color, color: '#0A0A0A', background: 'white'}}>{userInitial}</div>
              <div className="details">
                <div className="name" style={{color: color}}>{userName}</div>
                <div className="username">{userHandle}</div>
              </div>
            </div>
            <div className="about">{about}</div>
          </div>
        </div>
        <a className="icon" href={href} target="_blank" rel="noopener noreferrer">
          <div className="layer">
            <span style={layerSpanStyle}></span>
            <span style={layerSpanStyle}></span>
            <span style={layerSpanStyle}></span>
            <span style={layerSpanStyle}></span>
            <span className="fab" style={iconStyle}>{icon}</span>
          </div>
          <div className="text" style={{color: '#fff'}}>{text}</div>
        </a>
      </div>
    );
};

const Socials = () => {
  return (
    <div className="social-links-container">
      {socialData.map((social) => (
        <SocialLink key={social.text} {...social} />
      ))}
    </div>
  );
};

export default Socials;
