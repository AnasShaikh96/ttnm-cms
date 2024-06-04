/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        ...colors,
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('preline/plugin'),
  ],
})

