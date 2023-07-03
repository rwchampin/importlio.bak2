const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: [require("./theme")],
 

  

  // Add plugins
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"), 
    require("@tailwindcss/forms")
  ],
};