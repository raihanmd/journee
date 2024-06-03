import Navbar from "~/_components/Navbar";
import Hero from "~/_components/Hero";
import Services from "~/_components/Services";
import Destinations from "~/_components/Destinations";
import Booking from "~/_components/Booking";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Booking />
    </>
  );
}
