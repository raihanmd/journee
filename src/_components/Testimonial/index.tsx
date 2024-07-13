"use client";

import { motion } from "framer-motion";

import Headline from "./Headline";
import Card from "./Card";
import Glow from "../ui/Glow";

export default function Testimonial() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id="testimonial"
      className="my-container relative grid grid-cols-1 flex-col gap-10 overflow-hidden py-20 text-primary xl:grid-cols-2"
    >
      <Headline />
      <Card />
      <Glow color="fuchsia" />
    </motion.div>
  );
}
