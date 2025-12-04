"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const AboutMe = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

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
      className="w-full py-20 md:py-32 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="flex justify-center">
            {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={profileImage.description}
                  width={400}
                  height={400}
                  className="rounded-full object-cover aspect-square"
                  data-ai-hint={profileImage.imageHint}
                />
            )}
          </motion.div>
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Full Stack Developer
              </h2>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-white rounded-full" />
              </div>
              <h3 className="text-xl md:text-2xl text-white">
                Dedicated to building secure and high-performance solutions.
              </h3>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center"
            >
              I am a passionate Software Engineer focused on creating fast,
              secure, and user-friendly web applications. I enjoy turning complex
              problems into simple, beautiful, and functional digital solutions.
              Currently exploring advanced web security, cloud technologies, and
              modern UI animations to bring ideas to life with real-world impact.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
