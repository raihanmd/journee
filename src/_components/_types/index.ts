import type { ClassValue } from "clsx";
import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons/lib";

export type TSlide = {
  content: React.ReactNode;
  className?: ClassValue;
};

export type SwiperCarouselProps = {
  slides: TSlide[];
  description?: string;
  className?: ClassValue;
};

export type TDestinationCard = {
  img: StaticImageData;
  description: string;
  price: string;
  trip: number;
};

export type TServiceCard = {
  icon: IconType;
  title: string;
  description: string;
};

export type DestinationsCardProps = {
  card: TDestinationCard;
};

export type ServiceCardProps = {
  card: TServiceCard;
};

export type HeaderProps = {
  title: string;
  headline: string;
};
