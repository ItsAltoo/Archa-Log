import Hero from "./pages/Hero/page";
import Navbar from "./components/Navbar";
import About from "./pages/About/page";
import Lenis from "lenis";
import { useEffect } from "react";
import Gallery from "./pages/Gallery/page";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.6,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </>
  );
};

export default App;
