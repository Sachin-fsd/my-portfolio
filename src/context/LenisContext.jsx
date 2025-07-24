import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';

const LenisContext = createContext();

export const useLenisContext = () => {
  const context = useContext(LenisContext);
  return context; // Allow null/undefined values initially
};

export function useGsapLenisSync() {
  const lenis = useLenisContext();

  useEffect(() => {
    if (!lenis) return;

    function updateScrollTrigger() {
      ScrollTrigger.update();
    }

    lenis.on("scroll", updateScrollTrigger);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
    };
  }, [lenis]);
}

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Set the instance in state so components re-render
    setLenisInstance(lenisRef.current);

    // Animation frame function
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation frame
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setLenisInstance(null);
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
};
