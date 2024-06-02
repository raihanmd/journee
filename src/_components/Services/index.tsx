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
    <div
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
      <motion.div className="flex flex-wrap items-stretch justify-center gap-5">
        {SERVICE_CARDS.map((card) => (
          <ServiceCard key={card.title} card={card} />
        ))}
      </motion.div>
    </div>
  );
}

export const SERVICE_CARDS: TServiceCard[] = [
  {
    icon: GiStripedSun,
    title: "Calculated Weather",
    description: "Get accurate weather forecasts for your destination.",
  },
  {
    icon: SlPlane,
    title: "Best Flights",
    description:
      "Find the best flights with competitive prices and great service.",
  },
  {
    icon: PiPlanet,
    title: "Local Events",
    description:
      "Discover exciting local events and activities during your stay.",
  },
  {
    icon: GoGear,
    title: "Customization",
    description:
      "We offer personalized services to meet your unique travel needs.",
  },
];
