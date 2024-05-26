"use client";

import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export function useTheme() {
  const theme = useDarkMode();

  useEffect(() => {
    if (theme.isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme.isDarkMode]);

  return theme;
}
