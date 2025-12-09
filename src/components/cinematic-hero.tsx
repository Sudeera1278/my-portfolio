"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Renderer, Camera, Transform, Program, Mesh, Sphere } from 'ogl';

const vertex = /* glsl */ `
    attribute vec3 position;
    attribute vec3 normal;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform float uTime;

    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vNormal = normalize(normal);
        
        vec3 pos = position;
        pos.y += sin(pos.x * 2.0 + uTime * 0.5) * 0.1;
        pos.x += cos(pos.y * 2.0 + uTime * 0.5) * 0.1;
        
        vPosition = pos;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vec3 normal = normalize(vNormal);
        float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
        
        vec3 color = vec3(0.1, 0.2, 0.9); // Deep blue base
        color += (sin(vPosition.y * 5.0 + uTime) * 0.5 + 0.5) * 0.2;
        color.r += (cos(vPosition.x * 5.0 - uTime) * 0.5 + 0.5) * 0.2;
        
        gl_FragColor.rgb = color * (0.5 + lighting * 0.5);
        gl_FragColor.a = 1.0;
    }
`;


const OGLScene = () => {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mount.current) return;

    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    mount.current.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 35 });
    camera.position.set(0, 1, 5);
    camera.lookAt([0, 0, 0]);

    function resize() {
      if(!mount.current) return;
      renderer.setSize(mount.current.offsetWidth, mount.current.offsetHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    window.addEventListener('resize', resize, false);
    resize();

    const scene = new Transform();

    const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
            uTime: { value: 0 },
        },
    });

    const geometry = new Sphere(gl, { radius: 1, widthSegments: 64, heightSegments: 64 });
    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let animationFrameId: number;

    const update = (t: number) => {
        animationFrameId = requestAnimationFrame(update);

        program.uniforms.uTime.value = t * 0.0003;
        mesh.rotation.y -= 0.005;
        mesh.rotation.x += 0.002;

        renderer.render({ scene, camera });
    }
    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize, false);
      if (mount.current && gl.canvas.parentNode === mount.current) {
        mount.current.removeChild(gl.canvas);
      }
    };
  }, []);

  return <div ref={mount} className="absolute inset-0 z-0" />;
}


const CinematicHero = () => {
  return (
    <section
      className="relative w-full h-screen bg-background overflow-hidden"
    >
      <OGLScene />

      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-background via-background/30 to-transparent z-20"></div>

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
