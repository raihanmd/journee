"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { ServiceCardProps } from "~/_components/_types";
import { fadeInVariant } from "~/motions";
import { cn } from "~/lib/utils";

export default function ServiceCard({ card }: ServiceCardProps) {
  const { resolvedTheme } = useTheme();
  return (
    <motion.div
      variants={fadeInVariant}
      className={cn(
        "relative flex w-[250px] flex-col items-center justify-center gap-2 rounded px-2 py-5 shadow-lg transition-all hover:shadow-lg",
        {
          "border border-primary": resolvedTheme === "dark",
        },
      )}
    >
      <Image
        draggable={false}
        src={card.img}
        width={80}
        height={80}
        alt={card.description}
        loading="lazy"
        className={cn("h-[80px] w-[80px] rounded-t", {
          "w-[150px]": card.title === "Best Flights",
        })}
      />
      <div className="flex flex-col items-center justify-center gap-3 px-5 py-5 text-center">
        <p className="text-lg font-semibold">{card.title}</p>
        <p>{card.description}</p>
      </div>
    </motion.div>
  );
}
