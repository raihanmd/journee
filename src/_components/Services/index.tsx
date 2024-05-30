"use client";

import { motion } from "framer-motion";

import Header from "../ui/Header";
import Image from "next/image";
import type { TServiceCard } from "../_types";

import weather from "~/../public/vector/weather.svg";
import plane from "~/../public/vector/plane.svg";
import localEvent from "~/../public/vector/local-event.svg";
import customization from "~/../public/vector/customization.svg";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id="services"
      className="my-container relative flex flex-col gap-10 py-20 text-primary"
    >
      <Image
        draggable={false}
        src={"/vector/dot.svg"}
        alt="Dot"
        width={100}
        height={100}
        className="absolute right-0 top-0"
      />
      <Header title="Our Services" headline="We Offer Best Services" />
      <motion.div
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-wrap items-stretch justify-center gap-5"
      >
        {SERVICE_CARDS.map((card) => (
          <ServiceCard key={card.title} card={card} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export const SERVICE_CARDS: TServiceCard[] = [
  {
    img: weather,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    img: plane,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    img: localEvent,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. .",
  },
  {
    img: customization,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
  },
];
