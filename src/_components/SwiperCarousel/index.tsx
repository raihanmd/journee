"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "~/lib/utils";
import { SwiperCarouselProps } from "../types";

export default function SwiperCarousel({
  slides,
  className,
}: SwiperCarouselProps) {
  return (
    <div className="h-auto w-full overflow-hidden rounded-[2rem] border border-primary">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={cn("h-auto w-full hover:cursor-pointer", className)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={cn(
              "flex size-full items-center justify-center bg-teal-200 px-5 py-20 text-center text-4xl font-bold text-black",
              slide.className,
            )}
          >
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-5">
        <p className="text-2xl font-semibold text-primary">
          We Offer Best Services
        </p>
      </div>
    </div>
  );
}
