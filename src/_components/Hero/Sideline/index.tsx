"use client";
import { motion } from "framer-motion";

import SwiperCarousel from "~/_components/SwiperCarousel";
import { TSlide } from "~/_components/types";

export default function Sideline() {
  return (
    <div className="relative flex grid-cols-1 lg:col-span-1">
      <motion.div className="hidden h-auto w-full lg:block">
        <SwiperCarousel slides={SLIDES} />
      </motion.div>
    </div>
  );
}

const SLIDES: TSlide[] = [
  {
    content: (
      <p>
        Over to <span className="text-yellow-300">100k+</span> Destinations
      </p>
    ),
    className: "bg-pink-300",
  },
  {
    content: (
      <p>
        Over to <span className="text-accent">6329k+</span> Hotel ready
      </p>
    ),
    className: "bg-gray-300",
  },
  {
    content: (
      <p>
        Customer Service <span className="text-pink-300">24</span>/7 Online
      </p>
    ),
    className: "bg-cyan-300",
  },
  {
    content: <p>And many many more...</p>,
    className: "bg-yellow-300",
  },
];
