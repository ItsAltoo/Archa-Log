import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

const Gallery = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div ref={ref} className="relative h-[200vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </div>
    </>
  );
};

export default Gallery;

export const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <>
      <motion.section
        style={{ scale, rotate }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-zinc-900"
      >
        <div className="absolute h-10 w-10 top-1/4 right-1/4 border-t-[1px] border-r-[1px]" />
        <div className="absolute h-10 w-10 top-1/4 left-1/4 border-t-[1px] border-l-[1px]" />
        <div className="absolute h-10 w-10 bottom-1/4 right-1/4 border-b-[1px] border-r-[1px]" />
        <div className="absolute h-10 w-10 bottom-1/4 left-1/4 border-b-[1px] border-l-[1px]" />
        <h1 className="font-title text-primary-100 text-shadow-md text-shadow-primary-300 text-8xl ">
          Gallery
        </h1>
        <p className="max-w-1/2 mt-3 text-center font-thin">
          "Explore our curated collection of images that capture timeless
          moments of art and creativity. Each frame tells a unique story,
          inviting you to immerse in the beauty and wonder of the world."
        </p>
      </motion.section>
    </>
  );
};

export const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <>
      <motion.section
        style={{ scale, rotate }}
        className="relative  w-full h-screen"
      >
        <h1>Section 2</h1>
      </motion.section>
    </>
  );
};
