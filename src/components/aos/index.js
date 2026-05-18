"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Reduced from 2000ms to 800ms
      once: true, // Run animation only once
      offset: 100, // Start animation 100px before element enters viewport
      easing: 'ease-out-cubic', // Smoother easing
    });
  }, []);

  return children;
};

export default AOSProvider;
