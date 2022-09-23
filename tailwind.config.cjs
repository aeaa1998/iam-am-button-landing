const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.pink,
        ...colors
      },
    },
  },
  plugins: [],
  safelist: [
    'text-gray-700',
    'text-gray-400'
  ]
}
