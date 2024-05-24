export type TSlide = {
  content: React.ReactNode;
  className?: string;
};

export type SwiperCarouselProps = {
  slides: TSlide[];
  className?: string;
};
