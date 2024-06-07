"use client";

import Image from "next/image";
import type { IconType } from "react-icons/lib";
import { BsMap } from "react-icons/bs";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { RiLeafFill } from "react-icons/ri";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { motion } from "framer-motion";

import type { TripCardProps } from "~/_components/_types";
import { fadeInVariant } from "~/motions";

export default function Card({ card }: TripCardProps) {
  return (
    <motion.div
      variants={fadeInVariant}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      className="flex h-[max(40svh,_350px)] w-[300px] flex-col overflow-hidden rounded border border-primary bg-background sm:w-[350px] md:h-[max(50svh,_400px)] xl:w-[400px]"
    >
      <Image
        draggable={false}
        alt="trip"
        src={card.img}
        width={500}
        height={300}
        placeholder="blur"
        className="h-[65%] w-full object-cover object-center"
      />
      <div className="flex h-[35%] w-full flex-col justify-between px-4 py-2 md:py-4">
        <div className="flex flex-col md:gap-2">
          <div className="flex justify-between text-lg sm:text-xl">
            <motion.p
              variants={fadeInVariant}
              className="font-semibold text-primary"
            >
              {card.destination}
            </motion.p>
            <motion.p variants={fadeInVariant} className="text-primary/80">
              {card.date}
            </motion.p>
          </div>
          <motion.p
            variants={fadeInVariant}
            className="text-base text-primary/80"
          >
            By {card.author}
          </motion.p>
          <motion.div
            variants={fadeInVariant}
            className="hidden gap-3 text-xl sm:flex"
          >
            {BUTTON.map((ButtonIcon, i) => (
              <motion.section
                key={i}
                variants={fadeInVariant}
                className="inline rounded-full bg-primary/20 p-2 text-primary/60 hover:cursor-pointer"
              >
                <ButtonIcon className="text-sm md:text-base" />
              </motion.section>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center justify-between text-primary/80">
          <motion.div
            variants={fadeInVariant}
            className="flex items-center gap-3"
          >
            <PiBuildingApartmentLight className="text-xl" />
            <p>{card.traveler} people going</p>
          </motion.div>
          <CiHeart className="text-2xl transition-all hover:cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </motion.div>
  );
}

const BUTTON: IconType[] = [RiLeafFill, BsMap, IoPaperPlaneSharp];
