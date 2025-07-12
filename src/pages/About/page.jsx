import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { CloseDown } from "./anim/animate";
import Animate from "../../components/Animate";
import Content from "./Content";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const anim = (variants) => ({
    initial: "initial",
    animate: isInView ? "enter" : "initial",
    variants,
  });

  return (
    <>
      <div className="w-full relative z-0 top-0 right-0">
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
          <motion.div
            className="bg-background w-full h-full"
            ref={ref}
            {...anim(CloseDown)}
          />
        </div>

        <div
          style={{ backgroundImage: "url(./assets/About/bg_1.webp)" }}
          className="h-full w-full bg-cover bg-center top-0 right-0 absolute -z-10 bg-black/80 brightness-[20%] grayscale inset-shadow-sm inset-shadow-background/80"
        />

        <div className="overflow-hidden absolute inset-0">
          {/* leaf */}
          <img
            src=".\assets\About\leaf_ 1.webp"
            className="w-52 md:w-80 absolute bottom-0 right-0 grayscale z-20 brightness-[10%] opacity-55"
          />
          <img
            src=".\assets\About\leaf_ 2.webp"
            className="w-52 md:w-80 absolute bottom-6 left-0 grayscale z-20 brightness-[10%] "
          />

          {/* Dinosaurs */}
          <img
            src="\assets\About\dino_ (2).webp"
            className="w-40 md:w-80 absolute md:top-34 md:left-9 top-16 left-1 grayscale z-10 brightness-[50%] scale-x-[-1]"
          />
          <img
            src="\assets\About\dino_ (1).webp"
            className="w-56 md:w-96 absolute md:top-1/2 md:-right-7 top-[40%] -right-20 grayscale brightness-[50%] opacity-50"
          />
          <img
            src="\assets\About\dino_ (3).webp"
            className="w-52 md:w-80 absolute md:bottom-1/4 bottom-[26%] md:-left-8 -left-14 grayscale z-10 brightness-[50%]"
          />
        </div>

        <Animate delay={1} animate="ZoomIn">
          <h1 className="font-title md:text-9xl text-7xl text-center md:py-20 py-10 text-primary-100 text-shadow-sm text-shadow-primary-300 ">
            About
          </h1>
        </Animate>

        <section className="w-full md:p-10 p-2">
          <Content />
        </section>
      </div>
    </>
  );
};

export default About;
