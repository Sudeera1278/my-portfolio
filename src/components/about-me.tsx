"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutMe = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  const containerRef = useRef<HTMLElement>(null);
  const aboutText = "I am a passionate Full Stack Developer who enjoys building secure, fast, and user-friendly web applications. I love turning ideas into real digital products using modern technologies. My focus is on writing clean code, improving performance, and creating meaningful user experiences through both frontend and backend development. I am always learning new skills to grow as a developer.";

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

  return (
    <motion.section
      id="about"
      ref={containerRef}
      className="w-full py-20 md:py-32 bg-muted/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="flex justify-center">
            {profileImage && (
              <Card className="w-[350px] h-[450px] md:w-[400px] md:h-[500px] relative overflow-hidden rounded-2xl group">
                <Image 
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={profileImage.imageHint}
                />
              </Card>
            )}
          </motion.div>
          <div className="space-y-8 text-left md:text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Full Stack Developer
              </h2>
              <div className="flex">
                <div className="w-24 h-1 bg-white rounded-full" />
              </div>
              <h3 className="text-xl md:text-2xl text-white">
                Dedicated to building secure and high-performance solutions.
              </h3>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify"
            >
              {aboutText}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
