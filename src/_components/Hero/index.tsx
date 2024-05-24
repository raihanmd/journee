import SwiperCarousel from "../SwiperCarousel";
import Headline from "./Headline";

export default function Hero() {
  return (
    <div className="my-container grid h-[100svh] w-full grid-cols-1 gap-2 pb-10 pt-2 lg:grid-cols-4">
      <div className="relative grid-cols-1 rounded-[2rem] bg-primary lg:col-span-3">
        <Headline />
        <div className="curve absolute bottom-0 left-0 w-full bg-background px-5 py-8 text-primary before:-top-[40px] before:left-0 before:size-[40px] before:-rotate-90 after:-top-[40px] after:right-0 after:size-[40px] after:rotate-180 sm:max-w-[75%] sm:rounded-tr sm:after:-right-[40px] sm:after:bottom-0 sm:after:top-auto sm:after:-rotate-90 lg:max-w-[50%]">
          <p className="text-4xl sm:text-5xl md:text-6xl">
            Travel, enjoy and feelin' awesome.
          </p>
        </div>
      </div>
      <div className="relative flex grid-cols-1 flex-col items-center justify-center gap-2 lg:col-span-1">
        <SwiperCarousel slides={slidesData} />
        <SwiperCarousel slides={slidesData} />
        <SwiperCarousel slides={slidesData} />
      </div>
    </div>
  );
}

const slidesData = [
  { content: "Over to 100k+ Destinations" },
  { content: "Slide 2 Content" },
  { content: "Slide 3 Content" },
  { content: "Slide 4 Content" },
  { content: "Slide 5 Content" },
];
