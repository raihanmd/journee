"use client";
import { motion } from "framer-motion";

import type { ServiceCardProps } from "~/_components/_types";
import { fadeInVariant } from "~/motions";

export default function ServiceCard({ card }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInVariant}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className={
        "relative flex w-[250px] flex-col items-center justify-center gap-2 rounded border border-primary px-2 pb-5 pt-10 shadow-lg transition-all hover:shadow-lg"
      }
    >
      <card.icon className="text-5xl transition-all" />
      <div className="flex flex-col items-center justify-center gap-3 px-5 py-5 text-center">
        <p className="text-lg font-semibold">{card.title}</p>
        <p>{card.description}</p>
      </div>
    </motion.div>
  );
}
