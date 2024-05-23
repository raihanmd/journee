import Link from "next/link";
import { FaHamburger, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[5]">
      <div className="h-2 bg-background" />
      <div className="my-container flex items-stretch justify-between">
        <div className="flex gap-4">
          <div className="curve relative rounded-br bg-background py-2 before:-bottom-[40px] before:size-[40px] after:-right-[40px] after:top-0 after:size-[40px]">
            <p className="p-2 text-4xl">Jourñee.</p>
          </div>
          <div className="backdrop: my-3 hidden w-auto flex-1 items-center justify-center gap-5 rounded bg-background/60 px-10 backdrop-blur-md md:flex">
            {NAV_LINK.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-all hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="curve flex h-auto w-auto items-center justify-center rounded-bl bg-background px-4 text-5xl before:-left-[40px] before:top-0 before:size-[40px] before:rotate-90 after:-bottom-[40px] after:right-0 after:size-[40px] after:rotate-90">
          <FaInstagram className="rounded-full bg-background p-2 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80" />
          <FaHamburger className="rounded-full bg-background p-2 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 md:hidden" />
        </div>
      </div>
    </div>
  );
}

const NAV_LINK = [
  {
    label: "Destinations",
    href: "#destinations",
  },
  {
    label: "Hotels",
    href: "#hotels",
  },
  {
    label: "Flights",
    href: "#flights",
  },
  {
    label: "Booking",
    href: "#booking",
  },
];
