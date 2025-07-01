import React from "react";
import RotatingCards from "./RotatingCards";

const Hero = () => {
  return (
    <>
      <div className="h-screen overflow-hidden relative ">
        <section className="">
          <div className="">
            <h1 className="">Archa Log</h1>
          </div>
          <div className="flex justify-center items-center h-screen absolute -right-60 -bottom-28">
            <RotatingCards />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
