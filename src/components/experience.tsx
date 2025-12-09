"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Pencil } from "lucide-react";
import CardSwap, { Card } from './CardSwap';

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
            Experience
          </h2>
          <div className="w-24 h-1 bg-white/30 rounded-full mt-4" />
        </motion.div>

        <motion.div 
          className="relative flex justify-center items-center h-[350px] md:h-[400px]"
          variants={itemVariants}
        >
          <CardSwap
            width={700}
            height={300}
            cardDistance={40}
            verticalDistance={15}
            delay={3000}
            pauseOnHover={true}
          >
            {experienceData.map((exp) => (
              <Card key={exp.id}>
                 <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-lg hidden md:block">
                            {exp.icon}
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground mb-1">{exp.duration}</p>
                            <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        </div>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm md:text-base">{exp.description}</p>
                 </div>
              </Card>
            ))}
          </CardSwap>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
