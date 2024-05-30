"use client";

import Image from "next/image";
import { BsCursorFill } from "react-icons/bs";
import { motion } from "framer-motion";

import { DestinationsCardProps } from "~/_components/_types";
import { fadeInVariant } from "~/motions";

export default function DestinationCard({ card }: DestinationsCardProps) {
  return (
    <motion.div
      variants={fadeInVariant}
      className="relative rounded border border-primary transition-all hover:shadow-lg"
    >
      {+card.trip === 12 && (
        <Image
          src={"/vector/decore.svg"}
          alt="Decore"
          width={100}
          height={100}
          className="absolute -right-16 bottom-0 z-[-1]"
        />
      )}
      <Image
        draggable={false}
        src={card.img}
        width={300}
        height={300}
        alt={card.description}
        loading="lazy"
        placeholder="blur"
        className="h-[300px] w-[300px] rounded-t object-cover"
      />
      <div className="grid gap-3 rounded-b bg-background px-5 py-5">
        <div className="flex justify-between">
          <p>{card.description}</p>
          <p className="font-semibold text-lime-700">${card.price}</p>
        </div>
        <p className="flex gap-2 font-semibold">
          <BsCursorFill />
          {card.trip} Days Trip
        </p>
      </div>
    </motion.div>
  );
}
