/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2452D6',
          red: '#C50016',
          green: '#00710B',
          white: '#F9F8FF',
          green2: '#57C068',
        },
        secondary: {
          grey: '#777',
          grey2: '#F9F8FF',
          grey3: '#E2E2E2',
        },
      },
    },
  },
  plugins: [],
};
