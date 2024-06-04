"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { TripProps } from "~/_components/_types";

export default function Trip({ scrollProgress }: TripProps) {
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsXL(e.matches);
    };

    setIsXL(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="grid overflow-hidden">
      <motion.div
        style={{ x: isXL ? "0%" : scrollProgress }}
        className="relative flex gap-4 xl:flex-col"
      >
        <div className="size-[calc(40svh)] shrink-0 snap-center rounded-lg bg-pink-300 md:h-[calc(50svh)] md:w-full xl:w-full"></div>
        <div className="size-[calc(40svh)] shrink-0 snap-center rounded-lg bg-pink-300 md:h-[calc(50svh)] md:w-full xl:w-full"></div>
        <div className="size-[calc(40svh)] shrink-0 snap-center rounded-lg bg-pink-300 md:h-[calc(50svh)] md:w-full xl:w-full"></div>
        <div className="size-[calc(40svh)] shrink-0 snap-center rounded-lg bg-pink-300 md:h-[calc(50svh)] md:w-full xl:w-full"></div>
        <div className="size-[calc(40svh)] shrink-0 snap-center rounded-lg bg-pink-300 md:h-[calc(50svh)] md:w-full xl:w-full"></div>
        <div className="size-[calc(40svh)] shrink-0 snap-center rounded-lg bg-pink-300 md:h-[calc(50svh)] md:w-full xl:w-full"></div>
        <div className="size-[calc(40svh)] shrink-0 snap-center rounded-lg bg-pink-300 md:h-[calc(50svh)] md:w-full xl:w-full"></div>
        <div className="size-[calc(40svh)] shrink-0 snap-center rounded-lg bg-pink-300 md:h-[calc(50svh)] md:w-full xl:w-full"></div>
      </motion.div>
    </div>
  );
}
