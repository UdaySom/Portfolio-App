import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import { ScrollTrigger } from "./lib/gsap";
import Preloader from "./components/Preloader/Preloader";
import Cursor from "./components/Cursor/Cursor";
import Noise from "./components/Noise/Noise";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { marqueeWords } from "./data/content";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScrollProvider>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader
            key="preloader"
            onComplete={() => {
              setLoading(false);
              requestAnimationFrame(() => ScrollTrigger.refresh());
            }}
          />
        )}
      </AnimatePresence>

      <Cursor />
      <Noise />
      <Nav />

      <main>
        <Hero />
        <Marquee items={marqueeWords} speed={32} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}

export default App;
