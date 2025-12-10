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
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="relative mx-auto">
        {/* Laptop Frame */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Top bezel */}
          <div className="flex items-center justify-start gap-3 px-4 py-2 bg-gray-800/50">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-auto text-sm text-gray-400">Sudeera's Portfolio</div>
          </div>

          {/* Screen */}
          <div className="bg-black min-h-[360px] md:min-h-[420px] relative">
            {/* Content area inside screen with padding */}
            <div className="p-6 md:p-8 h-full flex flex-col md:flex-row items-stretch gap-6">
              {/* Left: Project preview (image or placeholder) */}
              <div className="flex-1 bg-gray-900/50 rounded-xl border border-gray-700 shadow-sm overflow-hidden flex items-center justify-center">
                {project && project.img ? (
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="text-center p-6 text-white">
                    <div className="text-lg font-semibold">No Preview</div>
                    <div className="text-sm text-gray-400 mt-2">
                      Provide `img` in project object to show a preview
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Project details */}
              <div className="w-full md:w-96 flex flex-col gap-4 text-white h-full">
                <div>
                  <h3 className="text-xl font-semibold">
                    {project ? project.title : "No projects"}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {project
                      ? project.desc
                      : "Add project objects via `projects` prop"}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project &&
                    project.tech?.map((t: string) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded-md"
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
                    className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white text-sm shadow-sm hover:bg-blue-700 disabled:opacity-50"
                    aria-disabled={!project?.liveUrl}
                  >
                    Live Demo
                  </a>

                  <a
                    href={project?.repoUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 rounded-md bg-gray-700 text-gray-200 text-sm hover:bg-gray-600 disabled:opacity-50"
                    aria-disabled={!project?.repoUrl}
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom bezel (keyboard area) */}
          <div className="bg-gray-900/50 p-4 flex items-center justify-center">
            <div className="w-10/12 h-2 rounded-lg bg-gray-800" />
          </div>
        </div>

        {/* Optional small shadow stand */}
        <div className="mt-6 flex justify-center">
          <div className="w-36 h-2 rounded-md bg-gray-800/50 shadow-md" />
        </div>
      </div>

      {/* Thumbnails / small nav below laptop */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {projects.map((p: any, i: number) => (
          <button
            key={p.id || i}
            onClick={() => setIndex(i)}
            className={`w-24 h-14 rounded-md overflow-hidden border ${
              i === index
                ? "ring-2 ring-blue-400 border-blue-400"
                : "border-gray-700"
            } bg-black shadow-sm`}
            aria-label={`Show ${p.title}`}
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
              <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                No preview
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
