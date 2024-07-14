import { useState } from "react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/_components/ui/Avatar";
import { motion } from "framer-motion";

import type { TTestimonial } from "~/_components/_types";
import { getInitials } from "~/lib/utils";
import { fadeInVariant } from "~/motions";
import CardNavigation from "./CardNavigation";
import Glow from "~/_components/ui/Glow";

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <motion.div
      variants={fadeInVariant}
      className="relative mx-auto px-10 sm:max-w-2xl xl:px-0"
    >
      <div className="relative z-[2] h-full w-full xl:pr-12">
        <Avatar className="absolute -left-8 -top-8 z-[3] border-2 border-primary bg-background">
          <AvatarImage src={TESTIMONIALS[currentIndex]!.img} />
          <AvatarFallback>
            {getInitials(TESTIMONIALS[currentIndex]!.name)}
          </AvatarFallback>
        </Avatar>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 7000,
          }}
          modules={[EffectCards, Navigation, Autoplay]}
          direction={"vertical"}
          navigation={{
            nextEl: ".swiper-navigation .swiper-button-next",
            prevEl: ".swiper-navigation .swiper-button-prev",
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="h-[350px] w-full md:h-80"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide
              key={item.name}
              className="flex h-full flex-col items-center justify-between rounded-md border border-primary bg-background p-8 sm:p-10"
            >
              <p className="text-center text-xl text-primary/70">
                "{item.content}"
              </p>
              <div className="flex w-full flex-col gap-2 text-start">
                <p className="text-lg font-semibold">{item.name}</p>
                <p>{item.address}</p>
              </div>
            </SwiperSlide>
          ))}

          <CardNavigation />
        </Swiper>
      </div>
      <Glow className="-left-10 top-10 xl:-right-6 xl:bottom-6 xl:left-auto xl:top-auto" />
    </motion.div>
  );
}

const TESTIMONIALS: TTestimonial[] = [
  {
    img: "/images/testimonial-1.webp",
    name: "Miaw",
    address: "San Francisco, CA",
    content:
      "When a unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: "without-photo",
    name: "Mike taylor",
    address: "Cardiff, UK",
    content:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    img: "/images/testimonial-2.webp",
    name: "Rudolv Scvakov",
    address: "Moscow, Russia",
    content:
      "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment.",
  },
  {
    img: "/images/testimonial-3.webp",
    name: "Mustafa Jamal Al-Kuwaiti",
    address: "Kuwait",
    content:
      "Its feel like an extension of me. When i trying to explore the world with this travel agency.",
  },
];
