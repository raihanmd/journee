"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "~/lib/utils";
import { SwiperCarouselProps } from "../../_types";

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
              "select-none bg-primary py-20 text-4xl font-bold text-black",
              slide.className,
            )}
          >
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
      {description && (
        <div className="p-5">
          <p className="text-2xl font-semibold text-primary">{description}</p>
        </div>
      )}
    </>
  );
}
