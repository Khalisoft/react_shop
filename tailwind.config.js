/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // 이부분 수정
  theme: {
    extend: {
      // custom colors
      colors: {
        brand: '#396d37',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
