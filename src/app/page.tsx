import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Education } from "../components/sections/Education";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
