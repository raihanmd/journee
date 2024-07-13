import Header from "~/_components/ui/Header";
import { GoDotFill } from "react-icons/go";

export default function Headline() {
  return (
    <div className="flex flex-col gap-20">
      <Header
        headline="What People Say About Us."
        title="Testimonials"
        className="xl:items-start xl:text-left"
      />
      <div className="flex items-center gap-3 text-2xl">
        <GoDotFill className="text-primary" />
        <GoDotFill className="text-primary/40" />
        <GoDotFill className="text-primary/40" />
      </div>
    </div>
  );
}
