"use client";

import { motion } from "framer-motion";

import type { HeaderProps } from "~/_components/_types";
import { fadeInVariant } from "~/motions";

export default function Header({ title, headline }: HeaderProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
      className="flex size-full flex-col items-center justify-center gap-2 text-center"
    >
      <motion.p variants={fadeInVariant} className="text-xl">
        {title}
      </motion.p>
      <motion.h2 variants={fadeInVariant} className="text-5xl">
        {headline}
      </motion.h2>
    </motion.div>
  );
}
