import AboutMe from "@/components/about-me";
import CinematicHero from "@/components/cinematic-hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CinematicHero />
      <div className="bg-background">
        <AboutMe />
        <Projects />
        <TechStack />
      </div>
    </main>
  );
}
