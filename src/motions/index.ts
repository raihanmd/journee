import { Variants } from "framer-motion";

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.9,
      duration: 0.5,
    },
  },
};