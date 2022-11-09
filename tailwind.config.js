// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      tp: {
        white: {
          60: 'hsla(255, 100%, 100%, .6)',
        },
      },
      customGreen: {
        100: 'hsl(89, 40%, 89%)',
        200: 'hsl(90, 64%, 80%)',
        300: 'hsl(90, 64%, 50%)',
        400: 'hsl(90, 64%, 35%)',
      },
      font: {
        default: {
          300: 'hsl(208, 37%, 40%)',
          400: 'hsl(208, 37%, 30%)',
          500: 'hsl(208, 37%, 20%)',
          600: 'hsl(208, 37%, 10%)',
        },
      },
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
