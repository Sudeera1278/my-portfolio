"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import LaptopProjectShowcase from "./LaptopProjectShowcase";

const projectsData = [
  {
    id: 1,
    title: "InternLink",
    desc: "A Flutter-Based Mobile & Web Application for Connecting Students with Companies.",
    tech: ["React", "HTML", "Tailwind CSS", "Spring Boot", "MySQL"],
    category: "Fullstack web project",
    liveUrl: "#",
    repoUrl: "#",
    imageId: "internlink-project",
  },
  {
    id: 2,
    title: "Salon Booking System",
    desc: "A backend application for managing salon appointments and services using Java Spring Boot.",
    tech: ["Spring Boot", "Java", "MySQL"],
    category: "Backend development",
    liveUrl: "#",
    repoUrl: "#",
    imageId: "salon-booking-project",
  },
  {
    id: 3,
    title: "Full stack Polling Application",
    desc: "A full stack Polling Application where users can create polls, vote on them, and view real-time results.",
    tech: ["React", "HTML", "Tailwind CSS", "Spring Boot", "MySQL"],
    category: "Fullstack web application",
    liveUrl: "#",
    repoUrl: "#",
    imageId: "polling-app-project",
  },
  {
    id: 4,
    title: "BloodLink",
    desc: "The backend for BloodLink, a system built to support emergency blood requests and donor coordination.",
    tech: ["Spring Boot", "React Native", "MongoDB Atlas"],
    category: "Fullstack mobile project",
    liveUrl: "#",
    repoUrl: "#",
    imageId: "bloodlink-project",
  },
];

const transformedProjects = projectsData.map(p => {
  const placeholder = PlaceHolderImages.find(img => img.id === p.imageId);
  return {
    ...p,
    img: placeholder?.imageUrl || '',
    imageHint: placeholder?.imageHint || '',
  }
});


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Projects
          </h2>
          <div className="w-24 h-1 bg-white/30 rounded-full mt-4" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <LaptopProjectShowcase projects={transformedProjects} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
