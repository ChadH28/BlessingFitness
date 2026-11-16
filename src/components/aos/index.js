"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AOSProvider = ({ children }) => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    AOS.init({
      duration: reduceMotion ? 0 : 700,
      once: true,
      disable: reduceMotion,
    });
  }, []);

  return children;
};

export default AOSProvider;
