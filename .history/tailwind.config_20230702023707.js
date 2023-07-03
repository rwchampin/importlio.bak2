const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: [require("./theme")],
  theme: {
    'colors': {
      primary: "#d1d1d1",
      "secondary": "#f8f8f8",
      // 'gray': {
      //   '50': '#f8f8f8',
      //   '100': '#f0f0f0',
      //   '200': '#e4e4e4',
      //   '300': '#d1d1d1',
      //   '400': '#b4b4b4',
      //   '500': '#9a9a9a',
      //   '600': '#8c8c8c',
      //   '700': '#6a6a6a',
      //   '800': '#5a5a5a',
      //   '900': '#4e4e4e',
      //   '950': '#282828',
      // },
      // 'white': {
      //   '50': '#ffffff',
      //   '100': '#fcfcfc',
      //   '200': '#fafafa',
      //   '300': '#f7f7f7',
      //   '400': '#f5f5f5',
      //   '500': '#f2f2f2',
      //   '600': '#f0f0f0',
      //   '700': '#ededed',
      //   '800': '#ebebeb',
      //   '900': '#e8e8e8',
      //   '950': '#e6e6e6',
      // },
      // 'cinder': {
      //   '50': '#f1f1fc',
      //   '100': '#e5e7fa',
      //   '200': '#d0d1f5',
      //   '300': '#b3b4ee',
      //   '400': '#9894e5',
      //   '500': '#877ada',
      //   '600': '#7660cb',
      //   '700': '#6650b2',
      //   '800': '#534390',
      //   '900': '#463b74',
      //   '950': '#120f1d',
      // },
      // 'comet': {
      //   '50': '#f7f7f8',
      //   '100': '#eeedf1',
      //   '200': '#d8d8df',
      //   '300': '#b6b6c3',
      //   '400': '#8e8fa2',
      //   '500': '#707187',
      //   '600': '#57576b',
      //   '700': '#4b4a5a',
      //   '800': '#3f3f4d',
      //   '900': '#393842',
      //   '950': '#26252c',
      // },
    }


  },

  

  // Add plugins
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};