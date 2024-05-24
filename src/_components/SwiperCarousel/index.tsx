"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "~/lib/utils";

export default function SwiperCarousel({ slides, className }: any) {
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
      className={cn("size-full rounded-[2rem]", className)}
    >
      {slides.map((slide: any, index: any) => (
        <SwiperSlide
          key={index}
          className={cn(
            "flex bg-teal-200 px-5 py-5 text-4xl font-bold text-primary",
            slide.className,
          )}
        >
          {slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
