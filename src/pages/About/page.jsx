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
        <div className="h-full w-full  top-0 right-0 -z-10 absolute bg-black/80">
            <img
              src="./assets/About/bg_1.webp"
              className="h-full w-full brightness-[20%] grayscale inset-shadow-sm inset-shadow-background/80"
            />
          </div>

        <div className="overflow-hidden absolute inset-0">
          

          {/* leaf */}
          <img
            src=".\assets\About\leaf_ 1.webp"
            className="w-80 absolute bottom-0 right-0 grayscale z-10 brightness-[10%]"
          />
          <img
            src=".\assets\About\leaf_ 2.webp"
            className="w-80 absolute bottom-15 left-0 grayscale z-10 brightness-[10%]"
          />

          {/* Dinosaurs */}
          <img
            src="\assets\About\dino_ (2).webp"
            className="w-80 absolute top-34 left-9 grayscale z-10 brightness-[50%] scale-x-[-1]"
          />
          <img
            src="\assets\About\dino_ (1).webp"
            className="w-96 absolute top-[45%] -right-7 grayscale z-10 brightness-[50%] "
          />
          <img
            src="\assets\About\dino_ (3).webp"
            className="w-80 absolute bottom-1/4 -left-8 grayscale z-10 brightness-[50%]"
          />
        </div>

        <Animate delay={1} animate="ZoomIn">
          <h1 className="font-title text-9xl text-center py-20 text-primary-100 text-shadow-sm text-shadow-primary-300 ">
            About
          </h1>
        </Animate>

        <section className=" w-full p-10">
          <Content />
        </section>
      </div>
    </>
  );
};

export default About;
