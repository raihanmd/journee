import { motion } from "framer-motion";

import Header from "~/_components/ui/Header";
import { GoDotFill } from "react-icons/go";
import { fadeInVariant } from "~/motions";

export default function Headline() {
  return (
    <div className="flex flex-col gap-10 xl:gap-20">
      <Header
        headline="What People Say About Us."
        title="Testimonials"
        className="xl:items-start xl:text-left"
      />
      <motion.div
        variants={fadeInVariant}
        className="flex w-auto items-center justify-center gap-3 text-2xl xl:justify-start"
      >
        <GoDotFill className="text-primary" />
        <GoDotFill className="text-primary/40" />
        <GoDotFill className="text-primary/40" />
      </motion.div>
    </div>
  );
}
