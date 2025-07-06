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
      <div className="w-full  relative z-0 top-0 right-0 mt-52 ">
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <motion.div
            className="bg-background w-full h-full"
            ref={ref}
            {...anim(CloseDown)}
          />
        </div>

        <div className="bg-[url(./assets/About/bg_1.svg)] h-full w-full bg-cover top-0 right-0 -z-10 absolute bg-black/80 brightness-50  grayscale inset-shadow-sm inset-shadow-background" />

        <Animate delay={1} animate="ZoomIn">
          <h1 className="font-title text-9xl text-center py-20 text-primary-100 text-shadow-sm text-shadow-primary-300 ">
            About
          </h1>
        </Animate>

        <section className=" w-full px-10">
          <Content />
        </section>
      </div>
    </>
  );
};

export default About;
