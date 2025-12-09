"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const experienceData = [
  {
    role: "BackEnd Developer (Java Spring Boot)",
    duration: "2024 present",
    description:
      "Developing secure and efficient backend systems using Spring Boot. Experienced in building REST APIs, connecting databases, and testing backend functionality.",
  },
  {
    role: "UI/UX Designer (Figma)",
    duration: "2023 -present",
    description:
      "Translating ideas into intuitive visual designs using Figma. Improving user interaction through wireframes, prototypes, and test-driven design decisions.",
  },
  {
    role: "Content Publisher (Medium)",
    duration: "2024 -present",
    description:
      "Writing informative articles about software development and technology to share knowledge with the community.",
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
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <div className="w-24 h-1 bg-white/30 rounded-full mt-4" />
        </motion.div>

        <div className="relative h-[150vh]">
          <ScrollStack useWindowScroll>
            {experienceData.map((exp, index) => (
              <ScrollStackItem key={index}>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10 w-full transition-colors duration-300 h-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-background border-2 border-white/20 rounded-full flex items-center justify-center p-2">
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
