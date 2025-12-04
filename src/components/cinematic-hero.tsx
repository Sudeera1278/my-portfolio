"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Particles, { IOptions, RecursivePartial } from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const MountainLayer = ({
  fill,
  transform,
  children,
}: {
  fill: string;
  transform: any;
  children: React.ReactNode;
}) => (
  <motion.div
    className="absolute bottom-0 inset-x-0 w-full"
    style={{ x: transform }}
  >
    <svg
      width="100%"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className="w-full h-auto"
      fill={fill}
    >
      {children}
    </svg>
  </motion.div>
);

const CinematicHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  const particleOptions: RecursivePartial<IOptions> = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          resize: true,
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 120,
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const mouseX = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMounted) {
      mouseX.set(event.clientX - window.innerWidth / 2);
    }
  };

  const m1x = useTransform(mouseX, (v) => v * -0.01);
  const m2x = useTransform(mouseX, (v) => v * -0.02);
  const m3x = useTransform(mouseX, (v) => v * -0.03);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen bg-background overflow-hidden"
    >
      {isMounted && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particleOptions}
          className="absolute inset-0 z-0"
        />
      )}

      <div className="absolute inset-0 z-10">
        <MountainLayer fill="#111111" transform={m3x}>
          <path d="M-132.2,423.7c316.5-296.2,568.8-356.5,836.3-176.6c267.5,179.9,555,179.9,555,179.9V431H-132.2V423.7z" />
        </MountainLayer>
        <MountainLayer fill="#181818" transform={m2x}>
          <path d="M1440,248.3c-234.3-113.4-468.6-113.4-702.8,0c-156.2,75.6-234.3,75.6-390.4,0S156.2,172.7,0,248.3V431h1440V248.3z" />
        </MountainLayer>
        <MountainLayer fill="#222222" transform={m1x}>
          <path d="M-3,313.4C192.3,169.5,417.3-33,702.8,110.9S1159,389,1440,313.4V431H-3V313.4z" />
        </MountainLayer>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-background via-background/30 to-transparent z-20"></div>

      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground md:text-lg"
          >
            Developer & Designer
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground"
          >
            Sudeera Dilshan
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground md:text-xl"
          >
            Full Stack Developer
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
