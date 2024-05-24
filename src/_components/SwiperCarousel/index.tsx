"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "~/lib/utils";
import { SwiperCarouselProps } from "../types";

export default function SwiperCarousel({
  slides,
  className,
}: SwiperCarouselProps) {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: false,
      }}
      modules={[Pagination, Autoplay]}
      className={cn("w-full rounded-[2rem] hover:cursor-pointer", className)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className={cn(
            "flex bg-teal-200 px-5 pb-40 pt-5 text-4xl font-bold text-primary",
            slide.className,
          )}
        >
          {slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
