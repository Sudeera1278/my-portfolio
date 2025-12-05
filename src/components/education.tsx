"use client";

import React from "react";
import { motion } from "framer-motion";
import { School } from "lucide-react";
import { Result } from "postcss";

const educationData = [
  {
    degree: "Bachelor of Information and Communication Technology (Hons)",
    institution: "University of Sri Jayewardenepura",
    duration: "2022 presen",
    description:
      "Focused on software engineering, data structures, algorithms, and web development. Engaged in various projects and research activities.",
  },
  {
    degree: "G.C.E. Advanced Level (A/L)",
    Result:"A A B",
    institution: "Central College, Galnewa",
    duration: "2018 - 2021",
    description:
      "Studied in the Technology stream, building a strong foundation in mathematics and logical reasoning.",
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

const Education = () => {
  return (
    <motion.section
      id="education"
      className="w-full py-20 md:py-32"
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
            Education
          </h2>
          <div className="w-24 h-1 bg-white/30 rounded-full mt-4" />
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={containerVariants}
        >
          <div className="absolute left-4 top-0 h-full w-0.5 bg-white/10" />
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-12 mb-12 flex items-start"
              variants={itemVariants}
            >
              <div className="absolute left-4 top-1 w-8 h-8 -translate-x-1/2 bg-background border-2 border-white/20 rounded-full flex items-center justify-center">
                <School className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 w-full hover:border-white/20 transition-colors duration-300">
                <p className="text-sm text-muted-foreground mb-1">{edu.duration}</p>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="font-semibold text-white/80 mb-3">{edu.institution}</h4>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
