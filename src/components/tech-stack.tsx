"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

// SVG Icons for technologies - It's better to keep these as they are small and self-contained
const TSIcon = () => <svg viewBox="0 0 128 128"><rect width="128" height="128" rx="32" fill="#3178c6"></rect><path fill="#fff" d="M93.32 54.72h-17.4V37.32h-11.4v17.4H47.12v11.4h17.4v17.4h11.4V66.12h17.4Z M42.32 87.32l-5.6-5.6 15.6-15.6-15.6-15.6 5.6-5.6 15.6 15.6 15.6-15.6 5.6 5.6-15.6 15.6 15.6 15.6-5.6 5.6-15.6-15.6Z"></path></svg>;
const JSIcon = () => <svg viewBox="0 0 128 128"><rect width="128" height="128" fill="#f7df1e"></rect><path d="M64 100.2c-15.2 0-27.6-12.4-27.6-27.6S48.8 45 64 45c15.2 0 27.6 12.4 27.6 27.6S79.2 100.2 64 100.2zm0-47.2c-10.8 0-19.6 8.8-19.6 19.6s8.8 19.6 19.6 19.6 19.6-8.8 19.6-19.6-8.8-19.6-19.6-19.6z"></path><path d="M43.8 83.2H55c.7 2.4 2.4 3.6 4.9 3.6 2.3 0 3.7-1.1 3.7-2.7 0-1.8-1.3-2.5-4.4-3.5L56 79.5c-4.8-1.5-8-4.1-8-9.1 0-4.6 3.5-8.2 8.9-8.2 4.7 0 7.8 2.5 9.1 6.3l-10.3 4.4c-.4-1.3-.9-1.9-2.1-1.9-.9 0-1.5.5-1.5 1.3 0 1 .5 1.5 3 2.1l3.2 1c5.6 1.8 8.9 4.3 8.9 9.5 0 5.3-3.9 8.9-10.1 8.9-6.3 0-9.7-3.2-11-7.2zm27.2-21.4c-3.1 0-5.4 1.8-6.4 4.1l11.1 4.6c-.1-5.1-3.6-8.7-4.7-8.7zm-6.6 12.3l-11.4-4.7c.3 6.3 4.3 9.4 10.3 9.4 3.7 0 6.5-1.5 8.2-4.1.1-.1 0-.3-1.4-3.1l-5.7 2.5z"></path></svg>;
const PythonIcon = () => <svg viewBox="0 0 128 128"><g fill="#3776ab"><path d="M64 10A54 54 0 0 0 10 64a54 54 0 0 0 54 54z"></path></g><g fill="#ffc331"><path d="M64 118A54 54 0 0 0 118 64a54 54 0 0 0-54-54z"></path></g><g fill="#fff"><path d="M79.5 76.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0zM48.5 51.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"></path><path d="M41 98.4V73a4.5 4.5 0 0 1 4.5-4.5h33a4.5 4.5 0 0 0 4.5-4.5V29.6a4.5 4.5 0 0 1 9 0V64a13.5 13.5 0 0 1-13.5 13.5h-33A13.5 13.5 0 0 0 32 89.9v8.5a4.5 4.5 0 0 1 9 0z"></path></g></svg>;
const JavaIcon = () => <svg viewBox="0 0 128 128"><g><path d="M84.7 30.8c-2.4-3.4-5.9-5.4-11.2-5.4-5.3 0-8.8 1.9-11 4.4-1.9 2.2-2.9 5.3-2.9 9.3v34.9c0 4.2 1 7.2 2.9 9.3 2.2 2.5 5.8 4.4 11.1 4.4 5.3 0 8.8-1.9 11.1-5.3 2-3 2.9-7.1 2.9-12.4V62.4c6-4.5 9.2-9.6 9.2-15.6.1-6.1-3.2-11.5-9.4-16z" fill="#f89820"></path><path d="M42.7 30.8c-2.4-3.4-5.9-5.4-11.2-5.4-5.3 0-8.8 1.9-11 4.4-1.9 2.2-2.9 5.3-2.9 9.3v34.9c0 4.2 1 7.2 2.9 9.3 2.2 2.5 5.8 4.4 11.1 4.4 5.3 0 8.8-1.9 11.1-5.3 2-3 2.9-7.1 2.9-12.4V62.4c6-4.5 9.2-9.6 9.2-15.6.1-6.1-3.2-11.5-9.4-16z" fill="#5382a1"></path></g></svg>;
const CSharpIcon = () => <svg viewBox="0 0 128 128"><g fill="#6a1577"><path d="M96.3 31.7L76.5 51.5l19.8 19.8-11.3 11.3L65.2 62.8l-19.8 19.8-11.3-11.3 19.8-19.8-19.8-19.8 11.3-11.3L53.9 40.2l19.8-19.8z"></path><path d="M31.7 96.3l11.3-11.3-19.8-19.8 19.8-19.8-11.3-11.3-19.8 19.8zM96.3 31.7L85 43l19.8 19.8-19.8 19.8 11.3 11.3 19.8-19.8-19.8-19.8z"></path></g></svg>;
const PHPIcon = () => <svg viewBox="0 0 128 128"><ellipse cx="64" cy="64" rx="46.5" ry="25.5" fill="#8892be"></ellipse><g fill="#fff"><path d="M45.5 51.5h11v25h-11zM72 51.5c6.6 0 11.5 4.9 11.5 12.5S78.6 76.5 72 76.5h-5.5v-25H72zm0 6h-5.5v13H72c3.3 0 5.5-2.2 5.5-6.5s-2.2-6.5-5.5-6.5zM98 51.5c6.6 0 11.5 4.9 11.5 12.5S104.6 76.5 98 76.5H92.5v-25H98zm0 6H92.5v13H98c3.3 0 5.5-2.2 5.5-6.5s-2.2-6.5-5.5-6.5z"></path></g></svg>;
const CIcon = () => <svg viewBox="0 0 128 128"><path fill="#00599c" d="M64 0a64 64 0 1 0 0 128A64 64 0 0 0 64 0z"></path><path fill="#fff" d="M85.3 40.3c-7.9-7.9-18.4-12.3-29.6-12.3-11.2 0-21.7 4.4-29.6 12.3-2.1 2.1-2.1 5.4 0 7.4 2.1 2.1 5.4 2.1 7.4 0 5.8-5.8 13.5-9 22.2-9s16.4 3.2 22.2 9c2.1 2.1 5.4 2.1 7.4 0 2-2.1 2-5.4 0-7.4z"></path></svg>;
const ReactIcon = () => <svg viewBox="-11.5 -10.232 23 20.463"><circle r="2.05" fill="#61dafb"></circle><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>;
const SpringBootIcon = () => <svg viewBox="0 0 128 128"><path fill="#6db33f" d="M109.4 54.2c-3.1-13-14.4-23.4-28-26.5.1-1 .1-2 .1-3.1 0-8.8-7.2-16-16-16-7.8 0-14.3 5.6-15.7 12.9-1.9-1.2-4.2-1.8-6.6-1.8-8.8 0-16 7.2-16 16 0 .8.1 1.6.2 2.4-12.8 3.5-22.9 13.9-25.2 27.2-1 6.1.1 12.3 3.1 17.6 3.1 5.3 7.8 9.2 13.5 11.2.6.2 1.3.3 1.9.3h69.1c.7 0 1.4-.1 2-.3 15.3-4.8 24.2-20.5 19.4-35.8zM82.8 77H38.5c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h44.3c1.3 0 2.3 1 2.3 2.3v2.3c0 1.2-1 2.3-2.3 2.3zm-2.3-11.6H40.8c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h39.7c1.3 0 2.3 1 2.3 2.3v2.3c0 1.3-1 2.3-2.3 2.3zm-2.3-11.5H43.1c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h35.1c1.3 0 2.3 1 2.3 2.3v2.3c0 1.3-1 2.3-2.3 2.3z"></path></svg>;
const MySQLIcon = () => <svg viewBox="0 0 128 128" fill="none"><path fill="#00758F" d="M101.5 76.5v-25h-9v13.9l-10-10-6.4 6.4 10.1 10.1h-14v-6.4l10-10-6.4-6.4-13.9 13.9V45.1h-9v16.4l-13.9-13.9-6.4 6.4 10 10v-6.4h-14l10.1-10.1-6.4-6.4-10 10V51.5h-9v25h9V62.6l10-10 6.4 6.4-10.1 10.1h14v6.4l-10 10 6.4 6.4 13.9-13.9v16.4h9V81.9l13.9 13.9 6.4-6.4-10-10v6.4h14l-10.1 10.1 6.4 6.4 10-10v13.9h9z"/><path fill="#F29111" d="M64 42.1a12.5 12.5 0 0 0-12.5 12.5v32.8c0 2.2 1.8 4 4 4h17a4 4 0 0 0 4-4V54.6a12.5 12.5 0 0 0-12.5-12.5zm0 9c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5z"/></svg>;
const PostgreSQLIcon = () => <svg viewBox="0 0 128 128"><path fill="#336791" d="M64.5 98.2H36.3V29.8h28.2c12.1 0 20.3 7.8 20.3 20.9 0 8.3-4.5 14.3-10.5 17.5 7.4 2.8 12.8 9.3 12.8 18.6 0 13.8-9.4 21.4-22.6 21.4zM47.8 59.8h14.2c5.8 0 9.2-3.3 9.2-8.3s-3.4-8.1-9.2-8.1H47.8v16.4zm0 26.9h16.2c6.6 0 10.6-3.7 10.6-9.4s-4-9.6-10.6-9.6H47.8v19z"/></svg>;
const DockerIcon = () => <svg viewBox="0 0 128 128"><path fill="#2496ed" d="M109.8 62.4c-1.3-4.9-5.1-10-10.3-12.4l-11.8-5.5-2.6-1.2-18.4-8.5c-4-1.8-8.6-2.8-13.2-2.8H20.1c-1.1 0-2 .9-2 2v60c0 1.1.9 2 2 2h65.4c16.2 0 30.5-8.1 36.3-20.1 2.3-4.8 3.5-9.9 3.5-15.3 0-5.7-1.3-11.2-3.5-16.2zm-46.7-7.7h-9v-9h9v9zm-13 0h-9v-9h9v9zm13-13h-9v-9h9v9zm-13 0h-9v-9h9v9zm-13 13h-9v-9h9v9zm0-13h-9v-9h9v9zm39 26h-9v-9h9v9zm-13 0h-9v-9h9v9zm26 0h-9v-9h9v9zm-13-13h-9v-9h9v9zm-13 0h-9v-9h9v9z"/></svg>;
const LinuxIcon = () => <svg viewBox="0 0 128 128"><path fill="#fdd835" d="M110.5 86.8c-2.2 4.4-4.8 6-7.5 7.9-5.8 4.2-11.9 5.3-18.2 5.5-11.2.4-21.7-1-31.5-6.8-5.3-3.1-9.9-7-14.3-11-2.9-2.7-5.9-5.7-8.2-9-5.1-7.1-5-15.3 2.1-20.4 4.1-3 8.3-4.9 13.1-6.1 5.3-1.3 10.7-1.1 16 .4 5 .2 10 .2 15 .3 7.6.2 15.2.4 22.8.7 7.7.3 15.4-.3 20.3 6.1 2.7 3.5 3 9.3-1.3 12.4zm-48-52.6c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6zm29.8 0c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6z"/><path d="M78.6 86.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm-29.2 0c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z"/><path d="M64 54.2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/></svg>;
const FigmaIcon = () => <svg viewBox="0 0 128 128"><path fill="#f24e1e" d="M42.5 85.5a21.2 21.2 0 0 1-21.2-21.2V21.8h21.2v21.2h21.2v21.3a21.2 21.2 0 0 1-21.2 21.2z"/><path fill="#ff7262" d="M21.3 64.2a21.2 21.2 0 0 1 21.2-21.2h21.2v42.4H42.5a21.2 21.2 0 0 1-21.2-21.2z"/><path fill="#a259ff" d="M21.3 43A21.2 21.2 0 0 1 42.5 21.8h21.2v42.4H42.5A21.2 21.2 0 0 1 21.3 43z"/><path fill="#1abcfe" d="M63.7 21.8h21.2a21.2 21.2 0 1 1 0 42.4H63.7V21.8z"/><path fill="#0acf83" d="M84.9 64.2a21.2 21.2 0 1 1 21.2-21.2 21.2 21.2 0 0 1-21.2 21.2z"/></svg>;
const AWSIcon = () => <svg viewBox="0 0 128 128"><path fill="#FF9900" d="M19.1 82.2c-.3 1.1.2 2.2 1.3 2.5 1.1.3 2.2-.2 2.5-1.3l10-35.3c.3-1.1-.2-2.2-1.3-2.5-1.1-.3-2.2.2-2.5 1.3l-10 35.3zM102.7 47.1l-10 35.3c-.3 1.1.2 2.2 1.3 2.5 1.1.3 2.2-.2 2.5-1.3l10-35.3c.3-1.1-.2-2.2-1.3-2.5-1.1-.3-2.2.2-2.5 1.3z"/><path fill="#232F3E" d="M53.4 34.3c-2.6 0-5.2.3-7.8.9-1.5.3-2.5 1.9-2.2 3.4.3 1.5 1.9 2.5 3.4 2.2 2.2-.5 4.5-.7 6.7-.7 8.2 0 16.3 1.4 23.8 4.2 1.4.5 2.9-.2 3.4-1.6.5-1.4-.2-2.9-1.6-3.4-8.2-3-17.1-4.5-25.7-4.5zM41.7 88.9c-.3-1.5-1.9-2.5-3.4-2.2s-2.5 1.9-2.2 3.4c2.8 13.9 14.4 23.9 28 23.9 8.2 0 16-2.5 22.2-7.1 1.2-1 .9-2.7-.2-3.5-.9-.6-2.2-.6-3.1 0-5.5 4-12.3 6.1-19 6.1-12.1 0-22.5-8.8-24.9-20.6zM64 54.3c-7.4 0-13.3 6-13.3 13.3s6 13.3 13.3 13.3 13.3-6 13.3-13.3-6-13.3-13.3-13.3zm0 22.7c-5.2 0-9.4-4.2-9.4-9.4s4.2-9.4 9.4-9.4 9.4 4.2 9.4 9.4-4.2 9.4-9.4 9.4z"/></svg>;
const AzureIcon = () => <svg viewBox="0 0 128 128"><path fill="#0078d4" d="M79.5 21.8L38.2 73.1l-16.7-9.5L64 21.8h15.5zM21.5 63.6l16.7 9.5 24.3 33.1H41.8L21.5 63.6z"/></svg>;
const GoogleCloudIcon = () => <svg viewBox="0 0 128 128"><path fill="#4285F4" d="M96.5 64c0-14.8-10.4-27.4-24.2-31.5-2.2-.6-4.5-1-6.8-1-10.2 0-19.3 4.2-25.9 10.9-4.8 4.8-7.9 11.2-8.5 18.2H12.5c.6-8.5 4.5-16.2 10.3-22.1 6.8-6.8 15.6-10.8 25.1-11.4 1.9-.1 3.8-.2 5.6-.2 6.5 0 12.8 1.4 18.6 4.1 10.3 4.7 18.4 13.3 22.1 24.2.3.8.5 1.5.7 2.3h16.1z"/><path fill="#FBBC05" d="M37.9 96.6c4.8 4.8 11.2 7.9 18.2 8.5h18.6c14.8 0 27.4-10.4 31.5-24.2.6-2.2 1-4.5 1-6.8 0-10.2-4.2-19.3-10.9-25.9-4.8-4.8-11.2-7.9-18.2-8.5H57.5c-.7 8.5-4.5 16.2-10.3 22.1-6.8 6.8-15.6 10.8-25.1 11.4-1.9.1-3.8.2-5.6.2-1.3 0-2.6 0-3.9-.1v18.6c0 1.9.1 3.8.2 5.6z"/><path fill="#34A853" d="M64.5 73.1c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c6.2 0 11.2-5 11.2-11.2s-5-11.2-11.2-11.2c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c9.9 0 18.2 8.1 18.2 18.2s-8.2 18.2-18.2 18.2z"/><path fill="#EA4335" d="M64 64c0 1.9-1.6 3.5-3.5 3.5H42.3c-9.9 0-18.2-8.1-18.2-18.2 0-9.9 8.1-18.2 18.2-18.2h18.2c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5H42.3c-6.2 0-11.2 5 11.2 11.2s5 11.2 11.2 11.2H60.5c1.9 0 3.5 1.6 3.5 3.5z"/></svg>;


const allSkills = [
  { name: "TypeScript", icon: <TSIcon /> },
  { name: "JavaScript", icon: <JSIcon /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "Java", icon: <JavaIcon /> },
  { name: "C#", icon: <CSharpIcon /> },
  { name: "PHP", icon: <PHPIcon /> },
  { name: "C", icon: <CIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Spring Boot", icon: <SpringBootIcon /> },
  { name: "PostgreSQL", icon: <PostgreSQLIcon /> },
  { name: "MySQL", icon: <MySQLIcon /> },
  { name: "Docker", icon: <DockerIcon /> },
  { name: "AWS", icon: <AWSIcon /> },
  { name: "Azure", icon: <AzureIcon /> },
  { name: "Google Cloud", icon: <GoogleCloudIcon /> },
  { name: "Linux", icon: <LinuxIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const TechStack = () => {
  return (
    <motion.section
      id="skills"
      className="w-full py-20 md:py-32 overflow-hidden bg-muted/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-white/30 rounded-full mt-4" />
        </motion.div>
      </div>

      <motion.div
        className="relative w-full"
        variants={itemVariants}
      >
        <div className="flex animate-marquee-rtl space-x-8">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center space-y-2">
              <div className="w-24 h-24 p-4 bg-white/5 rounded-full flex items-center justify-center
                              transition-all duration-300 hover:bg-white/10 hover:scale-110">
                <div className="w-full h-full">
                  {skill.icon}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TechStack;

    