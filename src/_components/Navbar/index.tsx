"use client";

import Link from "next/link";
import { useToggle } from "usehooks-ts";
import { motion } from "framer-motion";
import { FaHamburger, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const fallDownVariant = {
  hidden: { y: -55, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.5 } },
};

const mobileNav = {
  hidden: { y: "-100vh", zIndex: 1, transition: { duration: 0.5 } },
  visible: {
    y: 0,
    zIndex: 10,
    transition: {
      delay: 0.7,
      type: "tween",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function Navbar() {
  const [isNavOpen, toggle] = useToggle();

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[5]">
        <div className="h-2 bg-background" />
        <div className="my-container flex items-stretch justify-between bg-background md:bg-transparent">
          <div className="flex gap-4">
            <div className="curve relative rounded-br bg-background py-2 before:-bottom-[40px] before:size-[40px] after:-right-[40px] after:top-0 md:after:size-[40px]">
              <motion.p
                variants={fallDownVariant}
                initial={"hidden"}
                animate={isNavOpen ? "hidden" : "visible"}
                className="p-2 text-4xl"
              >
                Jourñee.
              </motion.p>
            </div>
            <div className="backdrop: my-3 hidden w-auto flex-1 items-center justify-center gap-5 rounded bg-background/60 px-10 mix-blend-difference backdrop-blur-md md:flex">
              {NAV_LINK.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-all hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <motion.div
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
              hidden: {
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate={isNavOpen ? "hidden" : "visible"}
            className="curve flex h-auto w-auto items-center justify-center rounded-bl bg-background px-4 text-5xl before:-left-[40px] before:top-0 before:rotate-90 after:-bottom-[40px] after:right-0 after:size-[40px] after:rotate-90 md:before:size-[40px]"
          >
            <motion.i variants={fallDownVariant}>
              <FaInstagram className="rounded-full bg-background p-2 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 active:text-background" />
            </motion.i>
            <motion.i variants={fallDownVariant}>
              <FaHamburger
                className="rounded-full bg-background p-2 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 active:text-background md:hidden"
                onClick={() => toggle()}
              />
            </motion.i>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={mobileNav}
        initial="hidden"
        animate={isNavOpen ? "visible" : "hidden"}
        className="fixed z-[10] h-[100svh] w-full bg-background/70 p-20 backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          <motion.p variants={fallDownVariant} className="p-2 text-4xl">
            Jourñee.
          </motion.p>
          <motion.i variants={fallDownVariant} onClick={() => toggle()}>
            <IoClose className="rounded-full bg-background p-2 text-5xl text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 active:text-background md:hidden" />
          </motion.i>
        </div>
      </motion.div>
    </>
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
