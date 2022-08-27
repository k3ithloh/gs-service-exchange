/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      grey_800: "#323232",
      grey_600: "#757575",
      grey_400: "#B6B6B6",
      grey_200: "#D7D7D7",
      grey_100: "#EDEDED",
      dark_blue: "#436781",
      blue: "#3C769F",
      white: "#FFFFFF",
      green: "#077D55",
      yellow: "#FFB75D",
    },
    fontFamily: {
      'sans': ['GoldmanSans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        '128': '32rem',
        'almost_half': '48.5%',
      }
    },
  },
  plugins: [],
}
