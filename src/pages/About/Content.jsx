import React from "react";
import { Contents } from "./contents";
  
const Content = () => {
  return (
    <>
      <div className="bg-background/50 p-5 border-2 border-border rounded-xl ">
        {Contents.map((content, i) => (
          <div key={i} className="flex border-b-2 border-border pt-5 ">
            <div className="h-auto w-1/2 border-r-2 border-border">
              <div className="min-h-screen p-2 items-start justify-center flex relative top-0 right-0">
                <h2 className="text-center bg-background/70 w-1/2 py-3 rounded-3xl border-2 border-border sticky top-0 right-0">
                  {content.title}
                </h2>
              </div>
            </div>

            <div className="h-auto w-1/2">
              <div className="min-h-screen p-2">
                <p>{content.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
