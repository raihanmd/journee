"use client";

import Link from "next/link";
import { useToggle, useWindowSize } from "usehooks-ts";
import { Variants, motion } from "framer-motion";
import { FaHamburger, FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const hideNavItemsVariant: Variants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 1.1,
      duration: 0.5,
      type: "spring",
    },
  },
};

const buttonParent: Variants = {
  hidden: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  visible: {
    transition: { delayChildren: 1.4, staggerChildren: 0.2 },
  },
};

const buttonVariant: Variants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

const mobileMenuVariant: Variants = {
  visible: {
    y: "0%",
    transition: {
      delay: 0.5,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  hidden: {
    y: "-100%",
    transition: {
      delay: 0.3,
      duration: 1.25,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

const ulVariant: Variants = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const liVariant: Variants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.25,
      type: "spring",
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.65,
      type: "spring",
    },
  },
};
export default function Navbar() {
  const [isNavOpen, toggle, setIsNavOpen] = useToggle();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) setIsNavOpen(false);
  }, [width]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[5]">
        <div className="h-2 bg-background" />
        <motion.div
          initial="visible"
          animate={isNavOpen ? "hidden" : "visible"}
          className="my-container flex items-stretch justify-between bg-background md:bg-transparent"
        >
          <div className="flex gap-4">
            <div className="curve relative rounded-br bg-background py-2 before:-bottom-[40px] before:size-[40px] after:-right-[40px] after:top-0 md:after:size-[40px]">
              <motion.p
                variants={hideNavItemsVariant}
                initial={"hidden"}
                animate={isNavOpen ? "hidden" : "visible"}
                className="p-2 text-4xl"
              >
                Jourñee.
              </motion.p>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={ulVariant}
              className="my-3 hidden w-[40ch] flex-1 items-center justify-center gap-5 rounded bg-background/60 px-10 backdrop-blur-md md:flex"
            >
              {NAV_LINK.map((link) => (
                <motion.li key={link.label} variants={liVariant}>
                  <Link
                    href={link.href}
                    className="transition-all hover:font-semibold hover:text-background"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            initial="hidden"
            animate={isNavOpen ? "hidden" : "visible"}
            variants={buttonParent}
            className="curve flex h-auto w-auto items-center justify-center rounded-bl bg-background px-4 text-5xl before:-left-[40px] before:top-0 before:rotate-90 after:-bottom-[40px] after:right-0 after:size-[40px] after:rotate-90 md:before:size-[40px]"
          >
            <motion.i variants={buttonVariant}>
              <FaInstagram className="rounded-full bg-background p-2 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 active:text-background" />
            </motion.i>
            <motion.i variants={buttonVariant}>
              <FaHamburger
                className="rounded-full bg-background p-2 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 active:text-background md:hidden"
                onClick={() => toggle()}
              />
            </motion.i>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={mobileMenuVariant}
        initial="hidden"
        animate={isNavOpen ? "visible" : "hidden"}
        className="fixed z-[10] h-[100svh] w-full bg-background/70 px-5 py-10 backdrop-blur-md sm:px-20"
      >
        <div className="flex items-center justify-between">
          <motion.p variants={hideNavItemsVariant} className="p-2 text-4xl">
            Jourñee.
          </motion.p>
          <motion.i variants={hideNavItemsVariant} onClick={() => toggle()}>
            <IoClose className="rounded-full bg-background p-2 text-5xl text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 active:text-background" />
          </motion.i>
        </div>
        <div className="h-full w-full py-10 text-center">
          <motion.ul
            variants={ulVariant}
            className="flex h-full flex-col content-around justify-center gap-10"
          >
            {NAV_LINK.map((link) => (
              <motion.li
                key={link.label}
                variants={liVariant}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggle()}
                className="p-2 text-3xl sm:text-5xl"
              >
                <Link href={link.href} className="text-primary transition-all">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
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
