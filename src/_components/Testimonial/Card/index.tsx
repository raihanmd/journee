import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/_components/ui/Avatar";

import type { TTestimonial } from "~/_components/_types";
import CardNavigation from "./CardNavigation";
import { useState } from "react";
import { getInitials } from "~/lib/utils";

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="relative z-[2] h-full w-full pr-12">
      <Avatar className="absolute -left-8 -top-8 z-[3] border-2 border-primary bg-background">
        <AvatarImage src={TESTIMONIALS[currentIndex]?.img} />
        <AvatarFallback>
          {getInitials(TESTIMONIALS[currentIndex]!.name as string)}
        </AvatarFallback>
      </Avatar>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        direction={"vertical"}
        navigation={{
          nextEl: ".swiper-navigation .swiper-button-next",
          prevEl: ".swiper-navigation .swiper-button-prev",
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        className="h-80 w-full"
      >
        {TESTIMONIALS.map((item) => (
          <SwiperSlide
            key={item.name}
            className="flex flex-col items-center justify-between rounded-md border border-primary bg-background p-10"
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
