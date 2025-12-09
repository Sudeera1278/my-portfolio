"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Pencil } from "lucide-react";
import Carousel from "./Carousel";
import type { CarouselItem } from "./Carousel";

const experienceData: CarouselItem[] = [
  {
    id: 1,
    title: "BackEnd Developer (Java Spring Boot)",
    description:
      "Developing secure and efficient backend systems using Spring Boot. Experienced in building REST APIs, connecting databases, and testing backend functionality.",
    icon: <Code className="carousel-icon" />,
  },
  {
    id: 2,
    title: "UI/UX Designer (Figma)",
    description:
      "Translating ideas into intuitive visual designs using Figma. Improving user interaction through wireframes, prototypes, and test-driven design decisions.",
    icon: <Pencil className="carousel-icon" />,
  },
  {
    id: 3,
    title: "Content Publisher (Medium)",
    description:
      "Writing informative articles about software development and technology to share knowledge with the community.",
    icon: <Briefcase className="carousel-icon" />,
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
      </div>
      <motion.div className="flex justify-center" variants={itemVariants}>
        <Carousel items={experienceData} loop={true} autoplay={true} />
      </motion.div>
    </motion.section>
  );
};

export default Experience;
