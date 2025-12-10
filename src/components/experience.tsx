"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Pencil } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "BackEnd Developer (Java Spring Boot)",
    duration: "2024 - present",
    description:
      "Developing secure and efficient backend systems using Spring Boot. Experienced in building REST APIs, connecting databases, and testing backend functionality.",
    icon: <Code className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "UI/UX Designer (Figma)",
    duration: "2023 - present",
    description:
      "Translating ideas into intuitive visual designs using Figma. Improving user interaction through wireframes, prototypes, and test-driven design decisions.",
    icon: <Pencil className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Content Publisher (Medium)",
    duration: "2024 - present",
    description:
      "Writing informative articles about software development and technology to share knowledge with the community.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="w-full py-20 md:py-32 bg-muted/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-white/30 rounded-full mt-4" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-white/10" />
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-12 mb-12 flex items-start"
              variants={itemVariants}
            >
              <div className="absolute left-4 top-1 w-8 h-8 -translate-x-1/2 bg-background border-2 border-white/20 rounded-full flex items-center justify-center">
                {exp.icon}
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 w-full hover:border-white/20 transition-colors duration-300">
                <p className="text-sm text-muted-foreground mb-1">
                  {exp.duration}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
