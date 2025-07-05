import React from "react";
import Hero from "./pages/Hero/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="overflow-hidden">
        <About />
      </section>
    </>
  );
};

export default App;
