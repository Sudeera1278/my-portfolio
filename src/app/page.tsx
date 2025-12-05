import AboutMe from "@/components/about-me";
import CinematicHero from "@/components/cinematic-hero";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CinematicHero />
      <div className="relative z-10 bg-background">
        <AboutMe />
        <Projects />
        <TechStack />
        <Education />
        <div className="bg-muted/10">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
