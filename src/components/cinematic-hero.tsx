"use client";

import React from "react";
import { motion } from "framer-motion";
import LightRays from "./light-rays";

const CinematicHero = () => {
  return (
    <section
      className="relative w-full h-screen bg-background overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
      </div>


      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-background to-transparent z-20"></div>

      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex items-center space-x-4 -ml-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 1 }}
              className="h-px bg-white"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-white md:text-lg"
            >
              Developer & Designer
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 1 }}
              className="h-px bg-white"
            ></motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-wider"
          >
            Sudeera Dilshan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-white"
          >
            Full Stack Developer
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
