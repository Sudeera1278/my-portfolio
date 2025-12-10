"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = transformedProjects[activeIndex];

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
          <div className="w-full flex justify-center items-center py-16 bg-background">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-6 items-center">
              {/* Laptop Mockup */}
              <div className="flex justify-center items-center">
                <div className="relative w-[300px] md:w-[380px]">
                  <div className="rounded-[35px] overflow-hidden border-4 border-gray-700 shadow-2xl">
                    {activeProject.img && (
                      <Image
                        src={activeProject.img}
                        alt={activeProject.title}
                        width={380}
                        height={800}
                        className="w-full h-full object-cover"
                        data-ai-hint={activeProject.imageHint}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="text-white space-y-6">
                <h2 className="text-3xl font-bold">{activeProject.title}</h2>
                <p className="text-muted-foreground">{activeProject.desc}</p>
                
                <div className="flex gap-3 flex-wrap">
                  {activeProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/10 rounded-md text-sm">{t}</span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20">
                    <a href={activeProject.liveUrl} target="_blank" rel="noreferrer">View Project</a>
                  </Button>
                  <Button asChild variant="secondary" className="bg-gray-700 hover:bg-gray-600">
                    <a href={activeProject.repoUrl} target="_blank" rel="noreferrer">View Repo</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            {transformedProjects.map((p, i) => (
              <button
                key={p.id || i}
                onClick={() => setActiveIndex(i)}
                className={`w-28 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  i === activeIndex
                    ? "border-white/80 ring-2 ring-offset-2 ring-offset-background ring-white/50"
                    : "border-white/20 opacity-60 hover:opacity-100"
                } bg-background shadow-sm`}
                aria-label={`Show ${p.title}`}
              >
                {p.img ? (
                  <div className="relative w-full h-full">
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                    No preview
                  </div>
                )}
              </button>
            ))}
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
