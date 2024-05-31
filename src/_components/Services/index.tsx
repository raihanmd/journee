"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiStripedSun } from "react-icons/gi";
import { SlPlane } from "react-icons/sl";
import { PiPlanet } from "react-icons/pi";
import { GoGear } from "react-icons/go";

import type { TServiceCard } from "../_types";
import Header from "../ui/Header";
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
    icon: GiStripedSun,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: SlPlane,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: PiPlanet,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. .",
  },
  {
    icon: GoGear,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
  },
];
