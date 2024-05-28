"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { fadeInVariant } from "~/motions";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaPlane } from "react-icons/fa";
import Link from "next/link";

export default function Headline() {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      transition={{ when: "beforeChildren" }}
      className="relative h-[97svh] grid-cols-1 rounded-[2rem] bg-primary lg:col-span-3 lg:h-auto"
    >
      <motion.div variants={fadeInVariant} className="size-full">
        <Swiper
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          preventInteractionOnTransition={true}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          className="size-full"
        >
          <SwiperSlide>
            <Image
              src={"/images/footage.gif"}
              width={600}
              height={600}
              className="absolute h-full w-full select-none rounded-[2rem] object-cover object-center"
              alt="Footage"
              draggable={false}
              priority
              unoptimized
            />
          </SwiperSlide>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`/images/portrait-${index + 1}.webp`}
                  width={600}
                  height={600}
                  className="absolute h-full w-full select-none rounded-[2rem] object-cover object-center"
                  alt="portrait"
                  draggable={false}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
      <motion.div
        transition={{ when: "beforeChildren", staggerChildren: 0.5 }}
        className="curve absolute bottom-0 left-0 z-[5] flex w-full flex-col items-start gap-5 bg-background px-5 py-8 text-primary before:-top-[40px] before:left-0 before:size-[40px] before:-rotate-90 after:-top-[40px] after:right-0 after:size-[40px] after:rotate-180 sm:max-w-[75%] sm:rounded-tr sm:after:-right-[40px] sm:after:bottom-0 sm:after:top-auto sm:after:-rotate-90"
      >
        <motion.p variants={fadeInVariant} className="text-5xl md:text-6xl">
          Travel, enjoy and feelin' awesome.
        </motion.p>
        <motion.span
          variants={fadeInVariant}
          whileHover={{ rotateZ: 90 }}
          className="inline w-auto rounded-full border border-primary p-4 text-3xl text-primary hover:cursor-pointer hover:shadow"
        >
          <Link href={"#destinations"}>
            <FaPlane />
          </Link>
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
