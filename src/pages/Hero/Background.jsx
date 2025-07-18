import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { anim } from "../../helper/animate";
import { bgAnim } from "./anim/animate";


const Images = [
  { name: "background_1", url: "./assets/Hero/background/bg_1.webp" },
  { name: "background_2", url: "./assets/Hero/background/bg_2.webp" },
  { name: "background_3", url: "./assets/Hero/background/bg_3.webp" },
];

const Background = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide tiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <>
      <div className="h-screen w-screen z-0 absolute overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={Images[current].id}
            {...anim(bgAnim)}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Images[current].url})` }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Navigator */}
      <div className="absolute bottom-6 w-full flex justify-center z-20">
        <div className="flex space-x-3">
          {Images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-2.5 h-2.5" : "bg-white/40 "
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Background;
