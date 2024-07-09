/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
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
}

