export const CloseDown = {
  initial: { y: 0 },
  enter: {
    y: '100%',
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.5,
    },
  },
};
