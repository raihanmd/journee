"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "light") {
    return (
      <BsMoonFill
        onClick={() => setTheme("dark")}
        className="rounded-full bg-background p-2 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 active:text-background"
      />
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <MdLightMode
        onClick={() => setTheme("light")}
        className="rounded-full bg-background p-2 text-primary transition-all hover:cursor-pointer hover:bg-primary hover:text-background active:bg-primary/80 active:text-background"
      />
    );
  }
}
