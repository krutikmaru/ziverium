"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
// import "tailwindcss/tailwind.css";

const GradientMouseFollow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX - 50);
      y.set(e.clientY - 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-32 h-32 bg-ziverium-blue/20 blur-3xl pointer-events-none"
      style={{ x: springX, y: springY }}
    />
  );
};

export default GradientMouseFollow;
