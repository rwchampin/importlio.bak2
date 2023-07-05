const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/*"],
  // presets: [require("./theme")],

  theme: {
    extend: {
      colors: {
        "bg-white": "#f8f8f8",
        "bg-form": "#e9e9e9",
        "bg-gray": "#e9e9e9",
      },
      fontFamily: {
        montserrat: ['var(--font-monserrat)'],
        apercu: ['var(--font-apercu)'],
        apercuMedium: ['var(--font-apercu-medium)'],
        apercuBold: ['var(--font-apercu-bold)'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};