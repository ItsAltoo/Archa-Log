import { motion, useTransform } from "framer-motion";
import { dataImages } from "./data";
import Animate from "../../components/Animate";

export const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <>
      <motion.section
        style={{ scale, rotate }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-[hsl(0,0%,13%)]"
      >
        <div className="absolute h-10 w-10 top-1/4 right-1/4 border-t-[1px] border-r-[1px]" />
        <div className="absolute h-10 w-10 top-1/4 left-1/4 border-t-[1px] border-l-[1px]" />
        <div className="absolute h-10 w-10 bottom-1/4 right-1/4 border-b-[1px] border-r-[1px]" />
        <div className="absolute h-10 w-10 bottom-1/4 left-1/4 border-b-[1px] border-l-[1px]" />
        <h1 className="font-title text-primary-100 text-shadow-md text-shadow-primary-300 text-8xl ">
          Gallery
        </h1>
        <p className="max-w-1/2 mt-3 text-center font-thin">
          "Explore our curated collection of images that capture timeless
          moments of art and creativity. Each frame tells a unique story,
          inviting you to immerse in the beauty and wonder of the world."
        </p>
      </motion.section>
    </>
  );
};

export const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <>
      <motion.section style={{ scale, rotate }} className="relative w-full">
        <div className="p-4 bg-background min-h-screen border-zinc-500 border-b-2 mb-8 pb-8 border-dashed">
          <div className="columns-2 sm:columns-3 md:columns-5 gap-8 space-y-4">
            {dataImages.map((content, i) => (
              <div key={i}>
                <div className="overflow-hidden rounded-xl border-2 border-border hover:shadow-[0_0_8px_hsl(38,87%,53%)] mb-2">
                  <img
                    src={content.src}
                    alt={`img-${i}`}
                    className=" break-inside-avoid hover:scale-105 transition duration-150 ease-in-out"
                  />
                </div>
                <p>{content.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export const Section3 = () => {
  return (
    <>
      <div className="h-screen ">
        <div className="h-1/3 px-20 mb-2">
          <div className="flex items-end justify-start gap-4 text-2xl tracking-wider font-bold">
            <Animate delay={0.3} animate="ZoomIn">
              <p className="w-10 border-3 border-primary-100 text-primary-100 rounded-full flex items-center justify-center ">
                1
              </p>
            </Animate>
            <Animate
              delay={0.5}
              animate="SlideRight"
              className="text-font-100 font-title"
            >
              Title Images
            </Animate>
          </div>
          <div className="flex  ml-12 mt-3 gap-5 ">
            <Animate
              delay={0.8}
              animate="SlideDown"
              className="bg-[url('./assets/Gallery/top1.webp')] rounded-2xl border-2 border-border w-72 h-36 bg-cover bg-repeat bg-center hover:shadow-[0_0_8px_hsl(38,87%,53%)]"
            ></Animate>
            <Animate
              delay={1}
              animate="SlideRight"
              className="text-font-100 font-light relative"
            >
              <div className="absolute -top-1 -left-2  w-10 h-10 border-l border-t border-font-100 " />
              <div className="absolute -bottom-1 -right-1  w-10 h-10 border-r border-b border-font-100 " />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              at aspernatur quo vitae velit dolorem maiores ut tempore incidunt
              expedita? Ex quis iusto qui doloribus atque dolores, cumque ipsam
              unde.
            </Animate>
          </div>
        </div>

        <div className="h-1/3 px-20 mb-2">
          <div className="flex items-end justify-end gap-4 text-2xl tracking-wider font-bold">
            <Animate
              delay={0.5}
              animate="SlideRight"
              className="text-font-100 font-title"
            >
              Title Images
            </Animate>
            <Animate delay={0.3} animate="ZoomIn">
              <p className="w-10 border-3 border-primary-100 text-primary-100 rounded-full flex items-center justify-center ">
                2
              </p>
            </Animate>
          </div>
          <div className="flex  ml-12 mt-3 gap-5 ">
            <Animate
              delay={1}
              animate="SlideRight"
              className="text-font-100 font-light text-end relative"
            >
              <div className="absolute -top-1 -left-2  w-10 h-10 border-l border-t border-font-100 " />
              <div className="absolute -bottom-1 -right-1  w-10 h-10 border-r border-b border-font-100 " />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              at aspernatur quo vitae velit dolorem maiores ut tempore incidunt
              expedita? Ex quis iusto qui doloribus atque dolores, cumque ipsam
              unde.
            </Animate>
            <Animate
              delay={0.8}
              animate="SlideDown"
              className="bg-[url('./assets/Gallery/top2.webp')] rounded-2xl border-2 border-border w-72 h-36 bg-cover bg-repeat bg-center hover:shadow-[0_0_8px_hsl(38,87%,53%)]"
            ></Animate>
          </div>
        </div>

        <div className="h-1/3 px-20">
          <div className="flex items-end justify-start gap-4 text-2xl tracking-wider font-bold">
            <Animate delay={0.3} animate="ZoomIn">
              <p className="w-10 border-3 border-primary-100 text-primary-100 rounded-full flex items-center justify-center ">
                3
              </p>
            </Animate>
            <Animate
              delay={0.5}
              animate="SlideRight"
              className="text-font-100 font-title"
            >
              Title Images
            </Animate>
          </div>
          <div className="flex  ml-12 mt-3 gap-5 ">
            <Animate
              delay={0.8}
              animate="SlideDown"
              className="bg-[url('./assets/Gallery/top3.webp')] rounded-2xl border-2 border-border w-72 h-36 bg-cover bg-repeat bg-center hover:shadow-[0_0_8px_hsl(38,87%,53%)]"
            ></Animate>
            <Animate
              delay={1}
              animate="SlideRight"
              className="text-font-100 font-light relative"
            >
              <div className="absolute -top-1 -left-2  w-10 h-10 border-l border-t border-font-100 " />
              <div className="absolute -bottom-1 -right-1  w-10 h-10 border-r border-b border-font-100 " />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              at aspernatur quo vitae velit dolorem maiores ut tempore incidunt
              expedita? Ex quis iusto qui doloribus atque dolores, cumque ipsam
              unde.
            </Animate>
          </div>
        </div>
      </div>
    </>
  );
};
