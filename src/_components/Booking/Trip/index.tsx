"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { TTripCard, TripProps } from "~/_components/_types";
import Card from "./Card";

import sedona from "~/../public/images/sedona-us.webp";
import cappadocia from "~/../public/images/cappadocia-turkey.webp";
import dubai from "~/../public/images/dubai-uae.webp";
import eifel from "~/../public/images/eifel-france.webp";
import egypt from "~/../public/images/egypt.webp";
import fuji from "~/../public/images/fuji-japan.webp";
import liberty from "~/../public/images/liberty-statue-us.webp";
import niagara from "~/../public/images/niagara-canada.webp";

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
        className="relative flex items-center justify-center gap-4 xl:flex-col"
      >
        {TRIP_CARD.map((card) => (
          <Card key={card.destination} card={card} />
        ))}
      </motion.div>
    </div>
  );
}

const TRIP_CARD: TTripCard[] = [
  {
    destination: "Sedona, USA",
    img: sedona,
    date: "11-26 Jan",
    author: "Tanaka Ken",
    traveler: 14,
  },
  {
    destination: "Cappadocia, Turkey",
    img: cappadocia,
    date: "2-14 Feb",
    author: "Kim Tracey",
    traveler: 7,
  },
  {
    destination: "Dubai, UAE",
    img: dubai,
    date: "20-31 Mar",
    author: "Nakayama Hana",
    traveler: 12,
  },
  {
    destination: "Eifel, France",
    img: eifel,
    date: "5-15 Mei",
    author: "John Buas",
    traveler: 9,
  },
  {
    destination: "Egypt",
    img: egypt,
    date: "7-21 Jul",
    author: "Kenith Chen",
    traveler: 11,
  },
  {
    destination: "Fuji, Japan",
    img: fuji,
    date: "11-26 Aug",
    author: "Tsuma Akari",
    traveler: 6,
  },
  {
    destination: "Liberty, USA",
    img: liberty,
    date: "6-17 Okt",
    author: "Rialdi Nopharat",
    traveler: 22,
  },
  {
    destination: "Niagara, Canada",
    img: niagara,
    date: "10-20 Dec",
    author: "Gregory Chen",
    traveler: 12,
  },
];
