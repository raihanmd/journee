import Image from "next/image";
import { BsCursorFill } from "react-icons/bs";
import { motion } from 'framer-motion';

import { DestinationsCardProps } from "~/_components/_types";
import { fadeInVariant } from "~/motions";

export default function Card({ card }: DestinationsCardProps) {
  return (
    <motion.div variants={fadeInVariant} className="overflow-hidden rounded border border-primary transition-all hover:shadow-lg">
      <Image
        src={card.img}
        width={300}
        height={300}
        alt={card.description}
        loading="lazy"
        placeholder="blur"
        className="object- h-[300px] w-[300px] object-cover"
      />
      <div className="grid gap-3 px-5 py-5">
        <div className="flex justify-between">
          <p>{card.description}</p>
          <p className="font-semibold text-lime-700">${card.price}</p>
        </div>
        <p className="flex gap-2 font-semibold">
          <BsCursorFill />
          {card.trip}
        </p>
      </div>
    </motion.div>
  );
}
