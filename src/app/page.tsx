import Navbar from "~/_components/Navbar";
import Hero from "~/_components/Hero";
import { Button } from "~/_components/ui/button";
import { FaPlay } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="my-container flex flex-col items-start justify-between gap-10 lg:items-stretch lg:gap-0">
        <h1 className="text-7xl text-primary">Get up to 50% off!</h1>
        <div className="flex flex-col gap-5">
          <Button variant={"secondary"} className="rounded-xl py-6 text-lg">
            Lets get started
          </Button>
          <div className="flex items-center justify-center gap-3 hover:cursor-pointer">
            <Button variant={"accent"} size={"icon"} className="rounded-full">
              <FaPlay />
            </Button>
            <p className="text-xl text-primary">Play demo</p>
          </div>
        </div>
      </div>
    </>
  );
}
