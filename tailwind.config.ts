import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
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
        black: "#121212",
        white: "#fffafd",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        background: "hsl(var(--background))",
      },
      boxShadow: {
        secondary: "0px 5px 20px 0px hsl(var(--secondary))",
        accent: "0px 5px 20px 0px hsl(var(--accent))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
