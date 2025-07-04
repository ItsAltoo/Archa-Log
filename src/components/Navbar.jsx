import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { navAnim, navSubItem } from "./anim/navAnim";
import {anim} from "../helper/animate"

// Data navigasi tidak berubah
const navItems = [{ name: "About" }, { name: "Gallery" }, { name: "Contact" }];

const Navbar = () => {
  // State untuk show/hide navbar saat scroll
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // State untuk membuka/menutup menu (sekarang hanya ada satu menu)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efek Scroll (tidak ada perubahan, sudah benar)
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleClick = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      className={`fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      {...anim(navAnim)}
    >
      <div className="flex justify-center">
        <nav className="flex flex-col bg-primary-100 w-[90%] md:w-[70%] lg:w-[30%] rounded-b-[40px] inset-shadow-sm inset-shadow-black transition-all duration-300">
          {/* BAGIAN ATAS: PEMICU/TRIGGER MENU */}
          <div className="flex justify-center items-center py-1.5 px-6">
            <button onClick={() => handleClick("#hero")}>
              <span className="text-4xl font-extrabold tracking-widest cursor-pointer font-logo text-shadow-lg/20">
                Archa Log
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center text-xl font-bold text-gray-800 focus:outline-none cursor-pointer hover:scale-125 transition delay-100"
            >
              {/* Ikon panah akan berputar sesuai state 'isMenuOpen' */}
              <svg
                className={`ml-2 w-8 h-8 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* BAGIAN BAWAH: KONTEN SUBMENU YANG BISA MEMANJANG */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="submenu"
                className="overflow-hidden"
                {...anim(navSubItem)}
              >
                {/* Daftar Submenu */}
                <ul className="pb-4 pt-1">
                  {navItems.map((item) => (
                    <li key={item.name} className="items-center flex flex-col">
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          setTimeout(() => {
                            handleClick(`#${item.name.toLowerCase()}`);
                          }, 350);
                        }}
                        className="block w-full text-sm tracking-widest text-amber-100 py-2 hover:bg-black/10 transition-colors duration-200 cursor-pointer text-shadow-lg/20"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
