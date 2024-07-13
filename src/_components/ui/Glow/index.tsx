import { motion } from "framer-motion";

import { GlowProps } from "~/_components/_types";
import { cn } from "~/lib/utils";
import { fadeInVariant } from "~/motions";

export default function Glow({ ...props }: GlowProps) {
  return (
    <motion.div
      variants={fadeInVariant}
      className={cn(
        `absolute size-96 bg-[radial-gradient(circle_190px,_theme(colors.fuchsia.500),_theme(colors.background))]`,
        props.className,
      )}
    />
  );
}
