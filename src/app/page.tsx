import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
      </main>
    </>
  );
}
