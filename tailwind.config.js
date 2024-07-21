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
        },
        secondary: {
          grey: '#777',
          grey2: '#F9F8FF',
        },
      },
    },
  },
  plugins: [],
};
