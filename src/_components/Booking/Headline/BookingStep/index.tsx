"use client";

import { motion } from "framer-motion";

import { BookingStepProps } from "~/_components/_types";
import { cn } from "~/lib/utils";
import { fadeInVariant } from "~/motions";

export default function BookingStep({ step }: BookingStepProps) {
  return (
    <motion.div
      variants={fadeInVariant}
      viewport={{ once: true }}
      initial="hidden"
      whileInView={"visible"}
      className="flex items-center gap-3 px-8 sm:px-28 md:px-0"
    >
      <motion.div
        variants={fadeInVariant}
        className={cn(
          "flex size-[40px] shrink-0 items-center justify-center rounded-lg bg-pink-300 text-xl text-white md:size-[50px] md:text-2xl",
          step.iconBg,
        )}
      >
        <step.icon />
      </motion.div>
      <motion.div variants={fadeInVariant} className="flex shrink flex-col">
        <motion.p variants={fadeInVariant} className="font-semibold md:text-lg">
          {step.title}
        </motion.p>
        <motion.p
          variants={fadeInVariant}
          className="text-xs text-primary/80 md:text-sm"
        >
          {step.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
