import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#FFFAF5",
          100: "#FFF5EB",
          200: "#FDECD8",
          300: "#F8DFC3",
        },
        taupe: {
          300: "#CFC0AE",
          400: "#7A6857",
          500: "#6B5B4E",
          600: "#5C4E44",
          700: "#4E433A",
          800: "#3B332D",
          900: "#2A241F",
        },
        sage: {
          50:  "#F2F6F3",
          100: "#E2EDE5",
          200: "#C3D9C9",
          500: "#528A62",
          600: "#3E7050",
          700: "#2F5840",
        },
        lavender: {
          50:  "#F7F4FB",
          100: "#EDE7F6",
          200: "#D8CEEC",
          400: "#A08DCE",
          500: "#836DBB",
          700: "#53408F",
        },
      },
      borderRadius: {
        lg: "0.625rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
