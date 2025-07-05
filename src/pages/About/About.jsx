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
      <div className="w-full bg-cyan-200 relative z-0 top-0 right-0 mt-20  ">
        <motion.div
          className="bg-red-600 h-auto w-full absolute top-0 right-0 z-10 "
          ref={ref}
          {...anim(CloseDown)}
        />
        <div className="bg-background w-[150%] h-20 blur-lg absolute  -right-5 -top-10" />

        <div className="bg-[url(./assets/About/bg_1.svg)] h-full w-full bg-cover top-0 right-0 -z-10 absolute bg-black/80 brightness-50  grayscale " />

        <Animate delay={1} animate="ZoomIn">
          <h1 className="font-title text-9xl text-center py-20 text-primary-100 text-shadow-sm text-shadow-primary-300 ">
            About
          </h1>
        </Animate>

        <section className="flex h-[400vh] w-full px-10 ">
          <Content />
        </section>
      </div>
    </>
  );
};

export default About;
