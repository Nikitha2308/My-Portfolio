import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import ExperienceHighlights from "@/components/ExperienceHighlights";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Header />
      <Hero />
      <Timeline />
      <Skills />
      <Certifications />
      <Achievements />
      <ExperienceHighlights />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
