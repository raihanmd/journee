import Headline from "./Headline";
import Trip from "./Trip";

export default function Booking() {
  return (
    <div className="my-container relative h-[300vh] xl:h-auto" id="booking">
      <div className="sticky top-24 grid h-screen gap-10 overflow-hidden text-primary xl:grid-cols-2">
        <Headline />
        <Trip />
      </div>
    </div>
  );
}
