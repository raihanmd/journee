import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "var(--border-radius)",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "hsl(var(--primary))",
        background: "hsl(var(--background))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
