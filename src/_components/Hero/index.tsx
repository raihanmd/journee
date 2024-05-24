import SwiperCarousel from "../SwiperCarousel";
import { TSlide } from "../types";
import Headline from "./Headline";

export default function Hero() {
  return (
    <div className="my-container grid w-full grid-cols-1 gap-5 pt-2 lg:h-[100svh] lg:grid-cols-4 lg:gap-2 lg:pb-10">
      <div className="relative h-[97svh] grid-cols-1 rounded-[2rem] bg-primary lg:col-span-3 lg:h-auto">
        <Headline />
      </div>
      <div className="relative flex grid-cols-1 flex-col items-center justify-start gap-2 lg:col-span-1">
        <SwiperCarousel slides={SLIDES} />
        <h2 className="text-8xl font-semibold">GET 20% OFF NOW</h2>
      </div>
    </div>
  );
}

const SLIDES: TSlide[] = [
  { content: "Over to 100k+ Destinations", className: "bg-pink-300" },
  { content: "Slide 2 Content" },
  { content: "Slide 3 Content" },
  { content: "Slide 4 Content" },
  { content: "Slide 5 Content" },
];
