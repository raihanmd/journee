"use client";
import { motion } from "framer-motion";

import type { TSlide } from "~/_components/_types";
import SwiperCarousel from "~/_components/ui/SwiperCarousel";
import { fadeInVariant } from "~/motions";

export default function Sideline() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex grid-cols-1 flex-col gap-5 lg:col-span-1"
    >
      <motion.div
        variants={fadeInVariant}
        className="hidden h-auto w-full overflow-hidden rounded-[2rem] border border-primary lg:block"
      >
        <SwiperCarousel
          slides={SLIDES_1}
          description="We Offer Best Services"
        />
      </motion.div>
      <motion.div
        variants={fadeInVariant}
        className="hidden h-auto w-full lg:block"
      >
        <SwiperCarousel slides={SLIDES_2} className="rounded-full" />
      </motion.div>
    </motion.div>
  );
}

const SLIDES_1: TSlide[] = [
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

const SLIDES_2: TSlide[] = [
  {
    content: (
      <p>
        Top <span className="text-red-300">10</span> Best Travel Awards
      </p>
    ),
    className: "text-background",
  },
  {
    content: (
      <p>
        Flight With Calculated <span className="text-fuchsia-300">Weather</span>
      </p>
    ),
    className: "text-background",
  },
  {
    content: (
      <p>
        Best <span className="text-amber-500">Flights</span> Around The{" "}
        <span className="text-lime-500">World</span>
      </p>
    ),
    className: "text-background",
  },
];
