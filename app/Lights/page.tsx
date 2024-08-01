"use client";
// Next & React imports
import React from "react";

// Third party imports
import { motion } from "framer-motion";
import Image from "next/image";

function Page() {
  return (
    <div className="bg-[#0a0d0d] flex justify-center items-center flex-col w-screen text-black dark:text-white min-h-screen relative overflow-hidden">
      {lines.map((line, index) => {
        const tailwind = `bg-[#0bbbbb] absolute -top-[330px]`;
        return (
          <motion.div
            style={{
              width: line.width,
              height: line.height,
              opacity: line.opacity,
              filter: `blur(${line.blur})`,
              left: line.left,
            }}
            key={index}
            className={tailwind}
            animate={randomMovement(index % 3 === 0)}
          />
        );
      })}
      <Image
        className="opacity-40"
        src="/ziverium_withtext.png"
        alt="Ziverium Logo"
        width={180}
        height={180}
        priority
      />
      <h1 className="text-[#818181] text-sm tracking-tight font-medium">
        Greatness to be unveiled soon...
      </h1>
    </div>
  );
}

export default Page;

const lines = [
  {
    width: "160px",
    height: "2000px",
    blur: "100px",
    opacity: "0.2",
    left: "-100px",
  },
  {
    width: "100px",
    height: "2000px",
    blur: "100px",
    opacity: "0.15",
    left: "-50px",
  },
  {
    width: "160px",
    height: "2000px",
    blur: "70px",
    opacity: "0.1",
    left: "100px",
  },
  {
    width: "160px",
    height: "2000px",
    blur: "100px",
    opacity: "0.1",
    left: "300px",
  },
  {
    width: "160px",
    height: "2000px",
    blur: "100px",
    opacity: "0.05",
    left: "600px",
  },
  {
    width: "100px",
    height: "2000px",
    blur: "70px",
    opacity: "0.1",
    left: "900px",
  },
  {
    width: "200px",
    height: "2000px",
    blur: "70px",
    opacity: "0.1",
    left: "1000px",
  },
  {
    width: "100px",
    height: "2000px",
    blur: "110px",
    opacity: "0.05",
    left: "1400px",
  },
  {
    width: "100px",
    height: "2000px",
    blur: "110px",
    opacity: "0.2",
    left: "500px",
  },
];

const randomMovement = (reverse = false) => {
  const distance1 = Math.random() * 400 + 50;
  const distance2 = Math.random() * 400 + 50;
  const duration1 = Math.random() * 20 + 3;
  const duration2 = Math.random() * 20 + 3;

  const xValues = reverse
    ? [0, -distance1, 0, distance2, 0]
    : [0, distance1, 0, -distance2, 0];

  return {
    x: xValues,
    rotate: [-25, -25, -25, -25, -25],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: duration1 + duration2,
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
  };
};
