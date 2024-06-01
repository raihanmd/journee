"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "~/lib/utils";
import type { SwiperCarouselProps } from "~/_components/_types";

export default function SwiperCarousel({
  slides,
  description,
  className,
}: SwiperCarouselProps) {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={cn(
          "size-full max-h-[280px] max-w-[280px] hover:cursor-pointer",
          className,
        )}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={cn(
              "size-full select-none bg-primary py-16 text-3xl font-bold text-black 2xl:py-20 2xl:text-4xl",
              slide.className,
            )}
          >
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      {description && (
        <div className="p-5">
          <p className="text-xl font-semibold text-primary 2xl:text-2xl">
            {description}
          </p>
        </div>
      )}
    </>
  );
}
