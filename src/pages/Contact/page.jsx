import React from "react";

const Contacts = [
  {
    name: "Github",
    icon: "fi fi-brands-github",
    link: "https://github.com/itsAltoo",
  },
  {
    name: "LinkedIn",
    icon: "fi fi-brands-linkedin",
    link: "https://www.linkedin.com/in/malik-s-a-0064a7314/",
  },
  {
    name: "Instagram",
    icon: "fi fi-brands-instagram",
    link: "https://www.instagram.com/malik_qit/",
  },
];

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="h-screen bg-background flex flex-col items-center justify-center gap-7 relative"
      >
        <h1 className="font-title text-primary-100 text-center text-shadow-md text-shadow-primary-300 md:text-8xl text-6xl">
          Our Contact
        </h1>
        <p className="text-center md:max-w-1/2 max-w-full font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eum ea
          ducimus. Illo quasi fugit, ad iure adipisci est magnam vitae veniam
          maxime voluptatem repudiandae itaque similique molestiae consequatur
          praesentium.
        </p>
        <button className="text-font-100 bg-primary-200 hover:bg-primary-100 active:bg-primary-100 transition duration-150 ease-in-out rounded-4xl px-5 p-2">
          yourcompany123@gmail.com
        </button>

        <div className="flex flex-row md:gap-5 gap-2 mt-5">
          {Contacts.map((contact, index) => (
            <div key={index}>
              <a
                href={contact.link}
                className="flex items-center justify-center h-5 p-4 border rounded-2xl border-primary-300 hover:bg-primary-300/10 active:bg-primary-300/10 hover:text-primary-100 active:text-primary-100 text-font-100 gap-2 transition duration-150 ease-in-out"
                target="_blank"
              >
                <i className={`${contact.icon}`} />
                <p>{contact.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
