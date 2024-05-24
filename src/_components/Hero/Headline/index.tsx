import Image from "next/image";

export default function Headline() {
  return (
    <>
      <Image
        src={"/images/footage.gif"}
        width={600}
        height={600}
        className="absolute h-full w-full rounded-[2rem] object-cover object-center"
        alt="Footage"
        priority
      />
      <div className="curve absolute bottom-0 left-0 w-full bg-background px-5 py-8 text-primary before:-top-[40px] before:left-0 before:size-[40px] before:-rotate-90 after:-top-[40px] after:right-0 after:size-[40px] after:rotate-180 sm:max-w-[75%] sm:rounded-tr sm:after:-right-[40px] sm:after:bottom-0 sm:after:top-auto sm:after:-rotate-90 lg:max-w-[50%]">
        <p className="text-4xl sm:text-5xl md:text-6xl">
          Travel, enjoy and feelin' awesome.
        </p>
      </div>
    </>
  );
}
