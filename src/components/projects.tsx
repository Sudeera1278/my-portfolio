"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

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
  const bloodlinkProject = transformedProjects.find(p => p.id === 4);
  const bloodlinkImage = PlaceHolderImages.find(p => p.id === 'bloodlink-project');

  return (
    <motion.section
      id="projects"
      className="w-full min-h-screen bg-black flex justify-center items-center py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT — Mobile UI preview */}
        <motion.div className="flex justify-center items-center" variants={itemVariants}>
          <div className="relative w-[300px] md:w-[380px]">
            <div className="rounded-[35px] overflow-hidden border-4 border-gray-700 shadow-2xl">
              {bloodlinkImage && (
                <Image
                  src={bloodlinkImage.imageUrl}
                  alt="BloodLink App UI"
                  width={380}
                  height={822}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Project Info */}
        <motion.div className="text-white flex flex-col items-start gap-4" variants={itemVariants}>
          <h2 className="text-4xl font-bold">BloodLink</h2>
          <p className="text-lg text-gray-300">
            The backend for BloodLink, a system built to support emergency blood requests
            and donor coordination.
          </p>

          <div className="flex gap-3 flex-wrap">
            {bloodlinkProject?.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-gray-800 rounded-md text-sm">{t}</span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <a href={bloodlinkProject?.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-gray-100 text-black rounded-lg font-semibold">
              View Project
            </a>
            <a href={bloodlinkProject?.repoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-gray-800 rounded-lg font-semibold">
              View Repo
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
