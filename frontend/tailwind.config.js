/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      grey_800: "#323232",
      grey_600: "#757575",
      grey_400: "#B6B6B6",
      grey_200: "#D7D7D7",
      grey_100: "#EDEDED",
      dark_blue: "#436781",
      blue: "#3C769F",
      pale_blue: "#EBF3FA",
      pale_blue_100: "#FAFDFF",
      white: "#FFFFFF",
      green: "#077D55",
      yellow: "#FFB75D",
      black: "#000000",
    },
    fontFamily: {
      'sans': ['GoldmanSans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        '100': '25rem',
        '128': '32rem',
        'almost_half': '48.5%',
      }
    },
  },
  plugins: [],
}
