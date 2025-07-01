import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";

const RADIUS = 100;

const Images = [
  { name: "Picture_1", src: "./assets/1.jpg" },
  { name: "Picture_2", src: "./assets/2.jpg" },
  { name: "Picture_3", src: "./assets/3.jpg" },
  { name: "Picture_4", src: "./assets/4.jpg" },
];

const RotatingCards = () => {
  const angle = useMotionValue(0);
  const baseTime = useRef(0);

  useAnimationFrame((t) => {
    const delta = t - baseTime.current;
    baseTime.current = t;
    angle.set(angle.get() + delta * 0.0003); // per frame update (kecepatan bisa diubah)
  });

  const anim = (variants) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  });

  const cardAnim = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.6, 0.32, 1.6],
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center"
      {...anim(cardAnim)}
    >
      <div className="relative md:w-[300px] md:h-[300px] ">
        {Images.map((_, i) => {
          const offset = (i / Images.length) * 2 * Math.PI;
          const theta = useTransform(angle, (a) => a + offset);

          const x = useTransform(theta, (t) => Math.cos(t) * RADIUS);
          const y = useTransform(theta, (t) => Math.sin(t) * RADIUS);

          const scale = useTransform(theta, (t) => {
            const cos = Math.cos(t);
            return 0.8 + 0.4 * Math.abs(cos); // besar di kiri/kanan
          });

          return (
            <motion.Img
              key={i}
              style={{ x, y, scale }}
              className={`absolute md:w-20 md:h-32 rounded-xl shadow-lg flex items-center justify-center md:scale-200 brightness-95 border border-border `}
              src={_.src}
              alt={_.name}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default RotatingCards;
