"use client";

import { BiDirections } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";

import type { TBookingStep } from "~/_components/_types";
import BookingStep from "./BookingStep";
import Header from "~/_components/ui/Header";

export default function Headline() {
  return (
    <div className="flex h-full flex-col items-center gap-3 md:gap-5 xl:sticky xl:top-1/4 xl:h-96 2xl:top-1/3">
      <Header
        headline="Book Your Next Trip In 3 Easy Steps"
        title="Easy and Fast"
        className="xl:items-start xl:text-left"
      />
      <div className="flex flex-col gap-2 md:gap-4">
        {BOOKING_STEPS.map((step) => (
          <BookingStep key={step.title} step={step} />
        ))}
      </div>
    </div>
  );
}

const BOOKING_STEPS: TBookingStep[] = [
  {
    icon: BiDirections,
    iconBg: "bg-fuchsia-400",
    title: "Choose Destination",
    description:
      "Select your preferred destination from a variety of amazing locations.",
  },
  {
    icon: BsQrCode,
    iconBg: "bg-orange-600",
    title: "Make Payment",
    description:
      "Securely make your payment through our trusted payment gateway.",
  },
  {
    icon: IoCarSportOutline,
    iconBg: "bg-teal-700",
    title: "Airport on Selected Date",
    description:
      "Arrive at the airport on the date you selected to start your journey.",
  },
];
