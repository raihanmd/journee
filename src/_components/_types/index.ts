import { ClassValue } from "clsx";
import { StaticImageData } from "next/image";

export type TSlide = {
  content: React.ReactNode;
  className?: ClassValue;
};

export type SwiperCarouselProps = {
  slides: TSlide[];
  description?: string;
  className?: ClassValue;
};

export type TCard = {
  img: StaticImageData;
  description: string;
  price: string;
  trip: string;
};

export type DestinationsCardProps = {
  card: TCard;
};
