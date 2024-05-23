"use client";

import { useState } from "react";
import { cn } from "~/lib/utils";

export default function Hero() {
  const [video, setVideo] = useState<number>(1);
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleVideoEnd = () => {
    setIsFading(true);
    setTimeout(() => {
      setVideo((prev) => (prev < 6 ? prev + 1 : 1));
      setIsFading(false);
    }, 1000);
  };

  //! NEED TO BE OPTIMIZED WHEN ON 3G SLOW
  return (
    <div className="my-container grid min-h-[100svh] w-full grid-cols-1 pb-10 pt-2 lg:grid-cols-4">
      <div className="relative rounded-[2rem] bg-primary lg:col-span-3">
        <video
          src={`/videos/${video}.mp4`}
          className={cn(
            "size-full rounded-[2rem] object-cover object-center transition-opacity duration-1000",
            {
              "opacity-0": isFading,
            },
            {
              "opacity-100": !isFading,
            },
          )}
          autoPlay
          muted
          onEnded={handleVideoEnd}
        />
        <div className="curve absolute bottom-0 left-0 w-full bg-background px-5 py-8 text-primary before:-top-[40px] before:left-0 before:size-[40px] before:-rotate-90 after:-top-[40px] after:right-0 after:size-[40px] after:rotate-180 sm:max-w-[75%] sm:rounded-tr sm:after:-right-[40px] sm:after:bottom-0 sm:after:top-auto sm:after:-rotate-90 lg:max-w-[50%]">
          <p className="text-4xl sm:text-5xl md:text-6xl">
            Travel, enjoy and feelin' awesome.
          </p>
        </div>
      </div>
    </div>
  );
}
