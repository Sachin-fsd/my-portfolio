// Smooth scroll utility for Lenis
export const scrollToSection = (elementId, lenis) => {
  const element = document.getElementById(elementId);
  if (element && lenis) {
    lenis.scrollTo(element, {
      offset: -100, // Account for fixed navbar
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  }
};

export const scrollToTop = (lenis) => {
  if (lenis) {
    lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  }
};
