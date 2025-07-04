export const CloseDown = {
  initial: { y: -10 },
  enter: {
    y: "400vh",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
};
