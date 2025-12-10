"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  desc: string;
  tech: string[];
  img: string;
  liveUrl: string;
  repoUrl: string;
  imageHint: string;
};

interface LaptopProjectShowcaseProps {
  projects: Project[];
  initialIndex?: number;
  autoRotate?: boolean;
  rotateInterval?: number;
}

export default function LaptopProjectShowcase({
  projects = [],
  initialIndex = 0,
  autoRotate = true,
  rotateInterval = 6000,
}: LaptopProjectShowcaseProps) {
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
        <div className="bg-gray-900/50 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          <div className="flex items-center justify-start gap-3 px-4 py-2 bg-gray-800/60">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-auto text-sm text-gray-400">Sudeera's Portfolio</div>
          </div>

          <div className="bg-background min-h-[360px] md:min-h-[480px] relative">
            <div className="p-6 md:p-8 h-full flex flex-col md:flex-row items-stretch gap-6">
              <div className="flex-1 bg-white/5 rounded-xl border border-white/10 shadow-sm overflow-hidden flex items-center justify-center relative">
                {project && project.img ? (
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                ) : (
                  <div className="text-center p-6">
                    <div className="text-lg font-semibold text-white">No Preview</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Provide `img` in project object to show a preview
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full md:w-80 flex flex-col gap-4 text-white">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project ? project.title : "No projects"}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project
                      ? project.desc
                      : "Add project objects via `projects` prop"}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project &&
                    project.tech?.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20"
                    aria-disabled={!project?.liveUrl}
                  >
                    <a href={project?.liveUrl || "#"} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-gray-700 hover:bg-gray-600"
                    aria-disabled={!project?.repoUrl}
                  >
                    <a href={project?.repoUrl || "#"} target="_blank" rel="noreferrer">
                      View Repo
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <div>
                    Project {projects.length ? index + 1 : 0} / {projects.length}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={prev} aria-label="previous" size="sm" variant="outline" className="bg-transparent">
                      Prev
                    </Button>
                    <Button onClick={next} aria-label="next" size="sm" variant="outline" className="bg-transparent">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 flex items-center justify-center">
            <div className="w-10/12 h-2 rounded-lg bg-gray-800/80" />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="w-36 h-2 rounded-md bg-gray-800/50 shadow-md" />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {projects.map((p, i) => (
          <button
            key={p.id || i}
            onClick={() => setIndex(i)}
            className={`w-24 h-14 rounded-md overflow-hidden border ${
              i === index
                ? "ring-2 ring-offset-2 ring-offset-background ring-white/50"
                : "border-white/20"
            } bg-background shadow-sm transition-all`}
            aria-label={`Show ${p.title}`}
          >
            {p.img ? (
              <div className="relative w-full h-full">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                No preview
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
