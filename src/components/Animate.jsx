import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Animate = ({ children, animate = "SlideUp", delay = 0 ,className}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animations = {
    SlideUp: {
      initial: { opacity: 0, y: 40 },
      enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, type: "spring", delay },
      },
    },

    SlideDown: {
      initial: {
        opacity: 0,
        y: -50,
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          type: "spring",
          delay,
        },
      },
    },

    SlideLeft: {
      initial: { opacity: 0, x: 60 },
      enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, type: "spring", delay },
      },
    },

    SlideRight: {
      initial: { opacity: 0, x: -60 },
      enter: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, type: "spring", delay },
      },
    },

    FadeIn: {
      initial: { opacity: 0 },
      enter: {
        opacity: 1,
        transition: { duration: 0.6, type: "spring", delay },
      },
    },

    ZoomIn: {
      initial: { opacity: 0, scale: 0.8 },
      enter: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, type: "spring", delay },
      },
    },
  };

  const selectedAnimation = animations[animate] || animations.SlideUp;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "enter" : "initial"}
      variants={selectedAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
