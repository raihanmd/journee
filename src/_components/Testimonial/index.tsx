"use client";
import { motion } from "framer-motion";

import Headline from "./Headline";
import Card from "./Card";

export default function Testimonial() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView={"visible"}
      id="testimonial"
      className="my-container grid grid-cols-1 flex-col gap-20 overflow-hidden py-10 text-primary xl:grid-cols-2 xl:gap-10 xl:py-20"
    >
      <Headline />
      <Card />
    </motion.div>
  );
}
