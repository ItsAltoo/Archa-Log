import React from "react";
import { Contents } from "./contents";
import Animate from "../../components/Animate";

const Content = () => {
  return (
    <>
      <div className="bg-linear-to-tr  from-background/50 to-background/60 p-5 border-2 border-border rounded-xl shadow-inner shadow-font-100/20">
        {Contents.map((content, i) => (
          <div
            key={i}
            className={`flex border-b-2 border-border py-3 gap-2 ${
              i < Contents.length - 1
                ? "border-b-2 border-border"
                : "border-none"
            }`}
          >
            <div className="h-auto w-1/2 ">
              <div className="min-h-screen p-2 items-start justify-center flex relative top-0 right-0 bg-background/40 rounded-2xl shadow-inner shadow-font-100/20">
                  <h2 className="text-center bg-background/70 w-1/2 py-3 rounded-3xl border-2 border-border sticky top-2 right-0 shadow-inner shadow-font-100/20">
                <Animate delay={0.5} animate="ZoomIn">
                    {content.title}
                </Animate>
                  </h2>
              </div>
            </div>

            <div className="h-auto w-1/2">
              <div className="min-h-screen p-7 bg-background/40 rounded-2xl shadow-inner shadow-font-100/20">
                <Animate delay={0.5} animate="SlideLeft">
                  <p className="text-font-100">{content.description}</p>
                </Animate>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
