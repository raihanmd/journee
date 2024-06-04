"use client";
import { useRef } from "react";

import Headline from "./Headline";
import { useScroll, useTransform } from "framer-motion";
import Trip from "./Trip";

export default function Booking() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div
      ref={scrollRef}
      className="my-container relative h-[300dvh] py-10 xl:h-auto"
      id="booking"
    >
      <div className="sticky top-24 flex flex-col gap-4 text-primary md:gap-10 xl:grid xl:grid-cols-2">
        <Headline />
        <Trip scrollProgress={scrollProgress} />
      </div>
    </div>
  );
}
