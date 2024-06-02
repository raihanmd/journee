"use client";

import { motion } from "framer-motion";

import type { HeaderProps } from "~/_components/_types";
import { cn } from "~/lib/utils";
import { fadeInVariant } from "~/motions";

export default function Header({ title, headline, ...props }: HeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariant}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 text-center",
        props.className,
      )}
    >
      <motion.p variants={fadeInVariant} className="text-md md:text-xl">
        {title}
      </motion.p>
      <motion.h2 variants={fadeInVariant} className="text-3xl md:text-5xl">
        {headline}
      </motion.h2>
    </motion.div>
  );
}
