"use client";
import { motion } from "framer-motion";

import { TDestinationCard } from "../_types";
import DestinationCard from "./DestinationCard";

import card1 from "~/../public/images/card-1.webp";
import card2 from "~/../public/images/card-2.webp";
import card3 from "~/../public/images/card-3.webp";
import Header from "../ui/Header";

export default function Destinations() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id="destinations"
      className="my-container flex flex-col gap-10 py-20 text-primary"
    >
      <Header title="Top Selling" headline="Top Destinations" />
      <motion.div
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        {CARDS.map((card) => (
          <DestinationCard key={card.description} card={card} />
        ))}
      </motion.div>
    </motion.div>
  );
}

const CARDS: TDestinationCard[] = [
  {
    img: card1,
    description: "Bali, Indonesia",
    price: "14.2k",
    trip: 10,
  },
  {
    img: card2,
    description: "Colosseum, Italy",
    price: "42.2k",
    trip: 7,
  },
  {
    img: card3,
    description: "Tokyo Tower, Japan",
    price: "34.2k",
    trip: 12,
  },
];
