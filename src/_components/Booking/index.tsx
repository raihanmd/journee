import Headline from "./Headline";

export default function Booking() {
  return (
    <div
      id="booking"
      className="my-container relative grid gap-10 py-20 text-primary xl:grid-cols-2"
    >
      <Headline />
      <div className="h-[200vh]">Hello</div>
    </div>
  );
}
