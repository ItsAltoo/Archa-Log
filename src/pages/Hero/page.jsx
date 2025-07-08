import React from "react";
import RotatingCards from "./RotatingCards";
import { motion } from "framer-motion";
import { anim } from "../../helper/animate";
import Background from "./Background";
import { headingAnim, subHeadAnim } from "./anim/animate";

const Hero = () => {

  return (
    <>
      <div className="h-screen overflow-hidden relative flex">
        <Background />
        <section className="flex flex-col justify-center ml-20 z-10">
          <div className="max-w-2xl">
            <motion.h1
              className="font-title text-8xl mb-4 text-primary-100 text-shadow-lg text-shadow-primary-300/60"
              {...anim(headingAnim)}
            >
              Archa Log
            </motion.h1>
            <motion.p className="font-extralight" {...anim(subHeadAnim)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              numquam accusamus porro cupiditate iusto, dolores, ducimus minus
              consequatur expedita quos deleniti? Blanditiis illum harum et
              inventore nobis, corrupti rerum officiis!
            </motion.p>
          </div>

          <div className="hidden md:flex justify-center  items-center h-screen absolute -right-60 -bottom-28">
            <RotatingCards />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
