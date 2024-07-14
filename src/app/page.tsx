import Navbar from "~/_components/Navbar";
import Hero from "~/_components/Hero";
import Destinations from "~/_components/Destinations";
import Services from "~/_components/Services";
import Booking from "~/_components/Booking";
import Testimonial from "~/_components/Testimonial";
import Subscribe from "~/_components/Subscribe";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Booking />
      <Testimonial />
      <Subscribe />
    </>
  );
}
