const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // presets: [require("./theme")],
  theme: {
    colors: {
      button: {
        light: "#F3F4F6",
        DEFAULT: "#E5E7EB",
        dark: "#D1D5DB",
      },
      text: {
        light: "#1F2937",
        DEFAULT: "#111827",
        dark: "#111827",
      },
      input: {
        light: "#e9e9e9",
        DEFAULT: "#111827",
        dark: "#383838",
      },
      background: {
        light: "#F8F8F8",
        DEFAULT: "#111827",
        dark: "#111827",
      },
    },
      


  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};