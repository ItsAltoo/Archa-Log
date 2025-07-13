import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="h-screen bg-background flex flex-col items-center justify-center gap-7 relative">
        <h1 className="font-title text-primary-100 text-center text-shadow-md text-shadow-primary-300 md:text-8xl text-6xl">Our Contact</h1>
        <p className="text-center md:max-w-1/2 max-w-full font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eum ea ducimus. Illo quasi fugit, ad iure adipisci est magnam vitae veniam maxime voluptatem repudiandae itaque similique molestiae consequatur praesentium.</p>
          <button className="text-font-100 bg-primary-200 hover:bg-primary-100 active:bg-primary-100 transition duration-150 ease-in-out rounded-4xl px-5 p-2">
            yourcompany123@gmail.com
          </button>
          
          <div className="absolute" >

          </div>
      </div>
    </>
  );
};

export default Contact;
