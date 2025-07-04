import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { CloseDown } from "./anim/animate";
import Animate from "../../components/Animate";

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
      <div className="w-full h-screen relative mt-20 z-0">
        <motion.div
          className="bg-background h-[400vh] w-full absolute top-0 right-0 z-10"
          ref={ref}
          {...anim(CloseDown)}
        />
        <div className="border-font-200 border-dashed border-b-2 w-full my-20 h-10 absolute -top-40" />

        <div className="bg-[url(./assets/About/bg_1.svg)] h-[400vh] w-full bg-cover -z-10 absolute bg-black/80 brightness-100 contrast-[18%] " />

        <Animate delay={1} animate="ZoomIn">
          <h1 className="font-title text-9xl text-center pt-20 text-primary-100 text-shadow-sm text-shadow-primary-300 ">
            About{" "}
          </h1>
        </Animate>

        <section></section>
      </div>
    </>
  );
};

export default About;
