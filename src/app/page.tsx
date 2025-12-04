import AboutMe from "@/components/about-me";
import CinematicHero from "@/components/cinematic-hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CinematicHero />
      <AboutMe />
    </main>
  );
}
