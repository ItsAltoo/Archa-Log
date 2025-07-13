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
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-background"
      >
        <div className="absolute h-10 w-10 md:top-1/4 md:right-1/4 top-1/3 right-1/12 border-t-[1px] border-r-[1px]" />
        <div className="absolute h-10 w-10 md:top-1/4 md:left-1/4 top-1/3 left-1/12 border-t-[1px] border-l-[1px]" />
        <div className="absolute h-10 w-10 md:bottom-1/4 md:right-1/4 bottom-1/3 right-1/12 border-b-[1px] border-r-[1px]" />
        <div className="absolute h-10 w-10 md:bottom-1/4 md:left-1/4 bottom-1/3 left-1/12 border-b-[1px] border-l-[1px]" />
        <h1 className="font-title text-primary-100 text-shadow-md text-shadow-primary-300 md:text-8xl text-6xl">
          Gallery
        </h1>
        <p className="md:max-w-1/2 max-w-[80%] mt-3 text-center font-thin">
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
        <div className="p-4 bg-background border-zinc-500 border-b-2 mb-8 pb-8 border-dashed">
          <div className="columns-2 sm:columns-3 md:columns-5 gap-8 space-y-4">
            {dataImages.map((content, i) => (
              <div key={i}>
                <div className="overflow-hidden rounded-xl border-2 border-border hover:shadow-[0_0_8px_hsl(38,87%,53%)] mb-2">
                  <img
                    src={content.src}
                    alt={`img-${i}`}
                    className="break-inside-avoid hover:scale-105 transition duration-150 ease-in-out"
                  />
                </div>
                <p className="font-light">{content.desc}</p>
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
      <div className="min-h-screen space-y-20 px-4 md:px-20 py-10">
        {/* SECTION 1 */}
        <div className="space-y-6">
          <div className="flex items-end gap-4 text-xl md:text-2xl tracking-wider font-bold">
            <Animate delay={0.3} animate="ZoomIn">
              <p className="w-10 h-10 border-2 border-primary-100 text-primary-100 rounded-full flex items-center justify-center">
                1
              </p>
            </Animate>
            <Animate delay={0.5} animate="SlideRight" className="text-font-100 font-title">
              Title Images
            </Animate>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Animate
              delay={0.8}
              animate="SlideDown"
              style={{ backgroundImage: "url(./assets/Gallery/top1.webp)" }}
              className="rounded-2xl border-2 border-border w-full md:w-72 h-52 md:h-36 bg-cover bg-center hover:shadow-[0_0_8px_hsl(38,87%,53%)]"
            />

            <Animate
              delay={1}
              animate="SlideRight"
              className="text-font-100 font-light relative w-full"
            >
              <div className="absolute -top-1 -left-2 w-10 h-10 border-l border-t border-font-100" />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 border-r border-b border-font-100" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              at aspernatur quo vitae velit dolorem maiores ut tempore incidunt
              expedita? Ex quis iusto qui doloribus atque dolores, cumque ipsam
              unde.
            </Animate>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="space-y-6">
          <div className="flex items-end justify-end gap-4 text-xl md:text-2xl tracking-wider font-bold">
            <Animate delay={0.5} animate="SlideRight" className="text-font-100 font-title">
              Title Images
            </Animate>
            <Animate delay={0.3} animate="ZoomIn">
              <p className="w-10 h-10 border-2 border-primary-100 text-primary-100 rounded-full flex items-center justify-center">
                2
              </p>
            </Animate>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Animate
              delay={1}
              animate="SlideRight"
              className="text-font-100 font-light relative w-full"
            >
              <div className="absolute -top-1 -left-2 w-10 h-10 border-l border-t border-font-100" />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 border-r border-b border-font-100" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              at aspernatur quo vitae velit dolorem maiores ut tempore incidunt
              expedita? Ex quis iusto qui doloribus atque dolores, cumque ipsam
              unde.
            </Animate>

            <Animate
              delay={0.8}
              animate="SlideDown"
              style={{ backgroundImage: "url(./assets/Gallery/top2.webp)" }}
              className="rounded-2xl border-2 border-border w-full md:w-72 h-52 md:h-36 bg-cover bg-center hover:shadow-[0_0_8px_hsl(38,87%,53%)]"
            />
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="space-y-6">
          <div className="flex items-end gap-4 text-xl md:text-2xl tracking-wider font-bold">
            <Animate delay={0.3} animate="ZoomIn">
              <p className="w-10 h-10 border-2 border-primary-100 text-primary-100 rounded-full flex items-center justify-center">
                3
              </p>
            </Animate>
            <Animate delay={0.5} animate="SlideRight" className="text-font-100 font-title">
              Title Images
            </Animate>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Animate
              delay={0.8}
              animate="SlideDown"
              style={{ backgroundImage: "url(./assets/Gallery/top3.webp)" }}
              className="rounded-2xl border-2 border-border w-full md:w-72 h-52 md:h-36 bg-cover bg-center hover:shadow-[0_0_8px_hsl(38,87%,53%)]"
            />

            <Animate
              delay={1}
              animate="SlideRight"
              className="text-font-100 font-light relative w-full"
            >
              <div className="absolute -top-1 -left-2 w-10 h-10 border-l border-t border-font-100" />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 border-r border-b border-font-100" />
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
