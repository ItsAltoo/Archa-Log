import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";
import { anim } from "../../helper/animate";
import { cardAnim } from "./anim/animate";

const RADIUS = 120;

const Images = [
  { name: "Picture_1", src: "./assets/Hero/card/1.webp" },
  { name: "Picture_2", src: "./assets/Hero/card/2.webp" },
  { name: "Picture_3", src: "./assets/Hero/card/3.webp" },
  { name: "Picture_4", src: "./assets/Hero/card/4.webp" },
];

const RotatingCards = () => {
  const angle = useMotionValue(0);
  const baseTime = useRef(0);

  useAnimationFrame((t) => {
    const delta = t - baseTime.current;
    baseTime.current = t;
    angle.set(angle.get() + delta * 0.0003); // per frame update (kecepatan bisa diubah)
  });

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
              className={`absolute md:w-20 md:h-32 rounded-xl flex items-center justify-center md:scale-200 brightness-75 border border-border`}
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
