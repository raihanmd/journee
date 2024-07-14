"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiMiniPaperAirplane } from "react-icons/hi2";

import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { fadeInVariant } from "~/motions";

export default function Subscribe() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView={"visible"}
      variants={fadeInVariant}
      className="my-container relative z-[11] flex flex-col gap-10 p-10 text-primary"
    >
      <Image
        draggable={false}
        src={"/vector/dot-2.svg"}
        alt="Dot"
        width={100}
        height={100}
        className="absolute bottom-0 right-0"
      />
      <Button className="absolute right-5 top-5 z-[1] h-16 w-16 rounded-full bg-primary text-center text-3xl text-background transition-all hover:rotate-45 hover:scale-[1.1] hover:bg-primary hover:text-background">
        <HiMiniPaperAirplane />
      </Button>
      <div className="relative flex flex-col items-center justify-between gap-16 overflow-hidden rounded-[100px_5px_5px_5px] bg-[#DFD7F9] p-20 text-center">
        <Image
          draggable={false}
          src={"/vector/circle.svg"}
          alt="Dot"
          width={300}
          height={300}
          className="absolute -bottom-10 -left-10"
        />
        <Image
          draggable={false}
          src={"/vector/circle.svg"}
          alt="Dot"
          width={300}
          height={300}
          className="absolute -right-10 -top-10 rotate-180"
        />

        <h2 className="text-center text-3xl font-bold text-black/80 transition-all">
          Subscribe to get information, latest news and other interesting offers
          about Jourñee.
        </h2>
        <div className="z-[1] flex w-full gap-3 md:w-[90%] lg:w-[70%]">
          <Input className="p-7" placeholder="Your Email" />
          <Button className="bg-black p-7 text-white">Subscribe</Button>
        </div>
      </div>
    </motion.div>
  );
}
