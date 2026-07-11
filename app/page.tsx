import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Journal from "@/components/sections/Journal";
import Future from "@/components/sections/Future";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About id="about" />
        <Journey id="journey" />
        <Achievements id="achievements" />
        <Projects id="projects" />
        <Journal id="journal" />
        <Future id="future" />
        <Contact id="contact" />
      </main>
    </>
  );
}