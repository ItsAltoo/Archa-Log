import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import { Section1, Section2, Section3 } from "./Content";
import Contact from "../Contact/page";

const Gallery = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div ref={ref} className="h-[200vh] relative">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <Section3 />
        <Contact />
      </div>
    </>
  );
};

export default Gallery;
