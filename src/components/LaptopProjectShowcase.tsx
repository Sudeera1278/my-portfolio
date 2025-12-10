"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function LaptopProjectShowcase({
  projects = [],
  initialIndex = 0,
  autoRotate = true,
  rotateInterval = 6000,
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (!autoRotate || projects.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, rotateInterval);
    return () => clearInterval(t);
  }, [autoRotate, rotateInterval, projects.length]);

  function prev() {
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  }
  function next() {
    setIndex((i) => (i + 1) % projects.length);
  }

  const project = projects.length ? projects[index] : null;

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <div className="relative mx-auto">
         {/* Laptop Frame */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
           {/* Top bezel */}
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-800">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-auto text-sm text-gray-400">Your Portfolio</div>
          </div>
           {/* Screen */}
          <div className="bg-black min-h-[500px] md:min-h-[580px] p-8 flex flex-col md:flex-row gap-6">
             {/* Image */}
            <div className="flex-1 bg-white rounded-xl flex items-center justify-center shadow-md">
              {project?.img ? (
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="object-contain max-h-[400px] w-auto"
                />
              ) : (
                <div className="text-gray-500 text-sm">No Preview Available</div>
              )}
            </div>
             {/* Text */}
            <div className="w-full md:w-80 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-xl font-semibold">{project?.title}</h3>
                <p className="text-sm mt-3 text-gray-300 min-h-[160px]">{project?.desc}</p>
              </div>
               {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project?.tech?.map((t: string) => (
                  <span key={t} className="px-2 py-1 text-xs bg-gray-700 rounded-md border border-gray-600">
                    {t}
                  </span>
                ))}
              </div>
               {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={project?.liveUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md"
                >
                  Live Demo
                </a>
                <a
                  href={project?.repoUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-sm rounded-md"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
           {/* Bottom bezel */}
          <div className="bg-gray-900 p-4 flex justify-center">
            <div className="w-2/3 h-3 rounded-lg bg-gray-800" />
          </div>
        </div>
         {/* Shadow under laptop */}
        <div className="mt-6 flex justify-center">
          <div className="w-48 h-3 bg-gray-300 rounded-md shadow-lg" />
        </div>
      </div>
       {/* Thumbnails */}
      <div className="mt-8 flex justify-center gap-4">
        {projects.map((p: any, i: number) => (
          <button
            key={p.id}
            onClick={() => setIndex(i)}
            className={`w-28 h-16 rounded-md overflow-hidden border ${i === index ? "ring-2 ring-blue-400" : ""}`}
          >
            {p.img ? (
              <Image src={p.img} alt={p.title} width={112} height={64} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-gray-600">No Preview</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
