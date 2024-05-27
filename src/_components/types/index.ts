import { ClassValue } from "clsx";

export type TSlide = {
  content: React.ReactNode;
  className?: ClassValue;
};

export type SwiperCarouselProps = {
  slides: TSlide[];
  className?: ClassValue;
};
