"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Webhook } from "lucide-react";

const projectsData = [
  {
    title: "InternLink – Fullstack Web App",
    description: "An internship management and student-company connection platform.",
    technologies: [
      { name: "React", icon: <Code /> },
      { name: "Spring Boot", icon: <Code /> },
      { name: "Firebase / MySQL", icon: <Database /> },
    ],
    category: "Fullstack web project",
    link: "#",
  },
  {
    title: "Salon Booking System – Backend API",
    description: "Backend-only appointment scheduling system for salons.",
    technologies: [
      { name: "Spring Boot", icon: <Code /> },
      { name: "Postman", icon: <Webhook /> },
    ],
    category: "Backend development",
    link: "#",
  },
  {
    title: "Polling Vote Application – Fullstack",
    description: "Real-time voting web application for polls and surveys.",
    technologies: [
      { name: "React", icon: <Code /> },
      { name: "Spring Boot", icon: <Code /> },
    ],
    category: "Fullstack web application",
    link: "#",
  },
  {
    title: "BloodLink – Mobile Application",
    description: "Mobile app for blood donation requests and donor connections.",
    technologies: [
      { name: "Spring Boot (API)", icon: <Code /> },
      { name: "React Native (Mobile)", icon: <Smartphone /> },
    ],
    category: "Fullstack mobile project",
    link: "#",
  },
];

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
      className="w-full py-20 md:py-32 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col justify-between
                         hover:shadow-lg hover:shadow-white/10 hover:-translate-y-2 transition-all duration-300
                         relative overflow-hidden group"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-300 pointer-events-none"></div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-white/10 text-white flex items-center gap-1"
                    >
                      {tech.icon}
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full bg-transparent text-white border-white/20 hover:bg-white/10">
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
