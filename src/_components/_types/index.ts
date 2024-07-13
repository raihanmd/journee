import type { ClassValue } from "clsx";
import type { MotionValue } from "framer-motion";
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

export type HeaderProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  headline: string;
};

export type TBookingStep = {
  icon: IconType;
  iconBg?: ClassValue;
  title: string;
  description: string;
};

export type BookingStepProps = {
  step: TBookingStep;
};

export type TripProps = {
  scrollProgress: MotionValue<string>;
};

export type TTripCard = {
  destination: string;
  img: StaticImageData;
  date: string;
  author: string;
  traveler: number;
};

export type TripCardProps = {
  card: TTripCard;
};

export type TTestimonial = {
  name: string;
  img: string;
  address: string;
  content: string;
};

export type SwiperContentProps = {
  testimonial: TTestimonial;
};
