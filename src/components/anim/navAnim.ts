export const navAnim = {
  initial: { y: -100, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const navSubItem = {
  initial: { height: 0, opacity: 0 },
  enter: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};
