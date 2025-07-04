export const bgAnim = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const headingAnim = {
  initial: {
    opacity: 0,
    x: -80,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 1.3,
      type: "spring",
    },
  },
};

export const subHeadAnim = {
  initial: {
    opacity: 0,
    x: -80,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 1.6,
      type: "spring",
    },
  },
};

export const cardAnim = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.68, -0.6, 0.32, 1.6],
    },
  },
};
