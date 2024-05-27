import Headline from "./Headline";
import Sideline from "./Sideline";

export default function Hero() {
  return (
    <div className="my-container grid w-full grid-cols-1 justify-between gap-5 pt-2 lg:h-[100svh] lg:grid-cols-4 lg:gap-3 lg:pb-10">
      <Headline />
      <Sideline />
    </div>
  );
}
