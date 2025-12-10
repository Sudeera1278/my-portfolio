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
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="relative mx-auto">
        {/* Laptop Frame */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Top bezel */}
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-800">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-auto text-sm text-gray-400">
              Project Showcase
            </div>
          </div>
          {/* Screen */}
          <div className="bg-white min-h-[450px] md:min-h-[480px]">
            <div className="p-6 md:p-8 h-full flex flex-col md:flex-row gap-8">
              {/* === FIXED IMAGE SECTION HERE === */}
              <div className="flex-1 bg-gray-100 rounded-xl border border-gray-300 shadow-md flex items-center justify-center p-4">
                {project?.img ? (
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-contain max-h-[300px] w-auto"
                  />
                ) : (
                  <div className="text-center text-gray-500">No Preview</div>
                )}
              </div>
              {/* Project Details */}
              <div className="w-full md:w-80 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project ? project.title : "No Projects"}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed min-h-[160px]">
                    {project ? project.desc : "Add projects using props"}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project?.tech?.map((t: string) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-gray-200 rounded-md border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <a
                    href={project?.liveUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm shadow hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project?.repoUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 text-sm shadow hover:bg-gray-300"
                  >
                    View Repo
                  </a>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <span>
                    Project {projects.length ? index + 1 : 0} /{" "}
                    {projects.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="px-2 py-1 rounded-md border hover:bg-gray-100"
                    >
                      Prev
                    </button>
                    <button
                      onClick={next}
                      className="px-2 py-1 rounded-md border hover:bg-gray-100"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom bezel */}
          <div className="bg-gray-900 p-4 flex justify-center">
            <div className="w-9/12 h-2 rounded-lg bg-gray-800" />
          </div>
        </div>
        {/* Laptop shadow */}
        <div className="mt-8 flex justify-center">
          <div className="w-40 h-2 rounded-md bg-gray-300 shadow" />
        </div>
      </div>
      {/* Thumbnail navigation */}
      <div className="mt-8 flex justify-center gap-3 flex-wrap">
        {projects.map((p: any, i: number) => (
          <button
            key={p.id}
            onClick={() => setIndex(i)}
            className={`w-24 h-16 rounded-md border overflow-hidden shadow ${
              i === index ? "ring-2 ring-blue-500" : ""
            }`}
          >
            {p.img ? (
              <Image
                src={p.img}
                alt={p.title}
                width={96}
                height={56}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-xs text-gray-400 flex items-center justify-center h-full">
                No Img
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
