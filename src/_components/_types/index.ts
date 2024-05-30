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

export type TDestinationCard = {
  img: StaticImageData;
  description: string;
  price: string;
  trip: number;
};

export type TServiceCard = {
  img: StaticImageData;
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
