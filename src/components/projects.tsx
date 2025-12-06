"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Webhook } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projectsData = [
  {
    title: "InternLink",
    description: "InternLink – A Flutter-Based Mobile & Web Application for Connecting Students with Companies InternLink is a cross-platform solution designed to connect students with companies offering internships. The mobile app, built using Flutter, provides a smooth and intuitive experience for students to create profiles, upload resumes, browse and apply for internships, and track applications. Companies can post and manage opportunities through a dedicated dashboard. The app is powered by Firebase Authentication for secure sign-in and sign-up, and uses Firebase Firestore and Cloud Storage for real-time data handling and file management. This project demonstrates strong skills in Flutter development, Firebase integration, and building scalable, user-focused applications.",
    technologies: [
      { name: "React", icon: <Code /> },
      { name: "HTML", icon: <Code /> },
      { name: "Tailwind CSS", icon: <Code /> },
      { name: "Spring Boot", icon: <Code /> },
      { name: " MySQL", icon: <Database /> },
    ],
    category: "Fullstack web project",
    link: "#",
    imageId: "internlink-project",
  },
  {
    title: "Salon Booking System ",
    description: "I developed a backend application for managing salon appointments and services using Java Spring Boot. The system allows customers to book appointments while the salon can manage services, staff schedules, and customer details. All data is stored in a MySQL database with proper entity relationships and validations. I created RESTful APIs for all operations and tested them using Postman to ensure reliability and correct functionality. This backend is designed to be scalable and can easily be connected to a web or mobile frontend in the future.",
    technologies: [
      { name: "Spring Boot", icon: <Code /> },
      { name: "Java", icon: <Code /> },
      { name: " MySQL", icon: <Database /> },
    ],
    category: "Backend development",
    link: "#",
    imageId: "salon-booking-project",
  },
  {
    title: " Full stack Polling Application ",
    description: "I built a full stack Polling Application where users can create polls, vote on them, and view real-time results. The frontend is developed using React, and the backend is powered by Spring Boot, ensuring smooth communication between user actions and data processing. The system uses a MySQL database to store user data, poll information, and voting results securely. I implemented CRUD APIs for creating polls, submitting votes, and retrieving poll results. User authentication and authorization help to ensure safe voting and prevent duplicate responses. This application is designed to be user-friendly and scalable, supporting future upgrades like analytics and live event polling.",
    technologies: [
      { name: "React", icon: <Code /> },
      { name: "HTML", icon: <Code /> },
      { name: "Tailwind CSS", icon: <Code /> },
      { name: "Spring Boot", icon: <Code /> },
      { name: " MySQL", icon: <Database /> },
    ],
    category: "Fullstack web application",
    link: "#",
    imageId: "polling-app-project",
  },
  {
    title: "BloodLink",
    description: "I developed the backend for BloodLink, a system built to support emergency blood requests and donor coordination. The backend is implemented using Java Spring Boot, providing secure and scalable REST APIs for managing all system features. The application allows users and hospitals to create urgent blood requests, while registered donors can respond when they match the required blood group. Data such as donor profiles, blood requests, and availability is stored in MongoDB Atlas, a cloud-based NoSQL database for fast access and flexible data modeling. All API endpoints were tested using Postman to ensure proper validation, clear responses, and smooth integration with the mobile application frontend.",
    technologies: [
      { name: "Spring Boot ", icon: <Code /> },
      { name: "React Native ", icon: <Smartphone /> },
      { name: " MongoDB Atlas", icon: <Database /> },
    ],
    category: "Fullstack mobile project",
    link: "#",
    imageId: "bloodlink-project",
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex flex-col justify-between
                           hover:shadow-lg hover:shadow-white/10 hover:-translate-y-2 transition-all duration-300
                           relative overflow-hidden group"
                variants={itemVariants}
              >
                <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-300 pointer-events-none"></div>
                
                <div>
                  {projectImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        fill
                        className="object-cover rounded-t-xl"
                        data-ai-hint={projectImage.imageHint}
                      />
                    </div>
                  )}

                  <div className="p-6 space-y-4">
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
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full bg-transparent text-white border-white/20 hover:bg-white/10">
                    View Project
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
