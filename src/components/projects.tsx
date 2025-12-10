"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import LaptopProjectShowcase from "./LaptopProjectShowcase";

const projectsData = [
  {
    id: 1,
    title: "InternLink",
    desc: "InternLink is a cross-platform solution designed to connect students with companies offering internships. The mobile app, built using Flutter, provides a smooth and intuitive experience for students to create profiles, upload resumes, browse and apply for internships, and track applications. The app is powered by Firebase Authentication for secure sign-in and sign-up, and uses Firebase Firestore and Cloud Storage for real-time data handling and file management.",
    tech: ["React", "HTML", "Tailwind CSS", "Spring Boot", "MySQL"],
    category: "Fullstack web project",
    liveUrl: "#",
    repoUrl: "#",
    imageId: "internlink-project",
  },
  {
    id: 2,
    title: "Salon Booking System",
    desc: "I developed a backend application for managing salon appointments and services using Java Spring Boot. The system allows customers to book appointments while the salon can manage services, staff schedules, and customer details. All data is stored in a MySQL database with proper entity relationships and validations. I created RESTful APIs for all operations and tested them using Postman to ensure reliability and correct functionality. This backend is designed to be scalable and can easily be connected to a web or mobile frontend in the future.",
    tech: ["Spring Boot", "Java", "MySQL"],
    category: "Backend development",
    liveUrl: "#",
    repoUrl: "#",
    imageId: "salon-booking-project",
  },
  {
    id: 3,
    title: "Full stack Polling Application",
    desc: "I built a full stack Polling Application where users can create polls, vote on them, and view real-time results. The frontend is developed using React, and the backend is powered by Spring Boot, ensuring smooth communication between user actions and data processing. The system uses a MySQL database to store user data, poll information, and voting results securely. I implemented CRUD APIs for creating polls, submitting votes, and retrieving poll results. User authentication and authorization help to ensure safe voting and prevent duplicate responses.",
    tech: ["React", "HTML", "Tailwind CSS", "Spring Boot", "MySQL"],
    category: "Fullstack web application",
    liveUrl: "#",
    repoUrl: "#",
    imageId: "polling-app-project",
  },
  {
    id: 4,
    title: "BloodLink",
    desc: "I developed the backend for BloodLink, a system built to support emergency blood requests and donor coordination. The backend is implemented using Java Spring Boot, providing secure and scalable REST APIs for managing all system features. The application allows users and hospitals to create urgent blood requests, while registered donors can respond when they match the required blood group. Data such as donor profiles, blood requests, and availability is stored in MongoDB Atlas, a cloud-based NoSQL database for fast access and flexible data modeling.",
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

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full min-h-screen bg-background flex flex-col justify-center items-center py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center text-center mb-16"
        variants={itemVariants}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          PROJECTS
        </h2>
        <div className="w-24 h-1 bg-white/30 rounded-full mt-4" />
      </motion.div>
      <motion.div variants={itemVariants} className="w-full">
        <LaptopProjectShowcase projects={transformedProjects} />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
