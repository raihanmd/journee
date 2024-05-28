'use client'

import { motion } from 'framer-motion';

import { TCard } from "../_types";
import Card from "./Card";

import card1 from "~/../public/images/card-1.webp";
import card2 from "~/../public/images/card-2.webp";
import card3 from "~/../public/images/card-3.webp";
import { fadeInVariant } from '~/motions';

export default function Destinations() {
  return (
    <motion.div
    
      initial="hidden"
      animate="visible"
      id="destinations"
      className="my-container flex flex-col gap-10 py-5 text-primary"
    >
      <motion.div transition={{ staggerChildren: 0.2 }} className="flex size-full flex-col items-center justify-center gap-2 text-center">
        <motion.p variants={fadeInVariant} className="text-xl">Top Selling</motion.p>
        <motion.h2 variants={fadeInVariant} className="text-5xl">Top Destinations</motion.h2>
      </motion.div>
      <motion.div transition={{ staggerChildren: 0.2 }} className="flex flex-wrap items-center justify-center gap-5">
        {CARDS.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </motion.div>
    </motion.div>
  );
}

const CARDS: TCard[] = [
  {
    img: card1,
    description: "Bali, Indonesia",
    price: "14.2k",
    trip: "10 Days Trip",
  },
  {
    img: card2,
    description: "Colosseum, Italy",
    price: "42.2k",
    trip: "7 Days Trip",
  },
  {
    img: card3,
    description: "Tokyo Tower, Japan",
    price: "34.2k",
    trip: "12 Days Trip",
  },
];
