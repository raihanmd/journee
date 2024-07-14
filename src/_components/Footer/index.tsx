"use client";

import { motion } from "framer-motion";
import { fadeInVariant } from "~/motions";
import type { TFooterInfo } from "../_types";

export default function Footer() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView={"visible"}
      variants={fadeInVariant}
      className="my-container flex flex-col items-center justify-center gap-20 px-10 pb-10 pt-32 text-primary md:px-20"
    >
      <div className="grid gap-10 md:grid-cols-3">
        <div className="flex flex-col gap-5 md:gap-10">
          <h2 className="text-4xl">Jourñee.</h2>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="col-span-2 flex justify-between">
          {FOOTER_INFO.map((info) => (
            <div key={info.label} className="flex flex-col gap-5">
              <h3 className="text-lg font-semibold sm:text-xl">{info.label}</h3>
              <div className="flex flex-col gap-1 text-primary/80 hover:cursor-pointer sm:text-lg md:gap-3">
                {info.links.map((link) => (
                  <p key={link} className="hover:font-semibold">
                    {link}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>All rights reserved @Copyright {new Date().getFullYear()} Jourñee.</p>
    </motion.div>
  );
}

const FOOTER_INFO: TFooterInfo[] = [
  {
    label: "Company",
    links: ["About", "Careers", "Mobile"],
  },
  {
    label: "Contact",
    links: ["Help/FAQ", "Low fare tips"],
  },
  {
    label: "More",
    links: ["Airlinefees", "Airline", "Low fare tips"],
  },
];
