/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./sub/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard Variable", "Pretendard", "system-ui", "sans-serif"],
      },
    },
    screens: {
      xxl: "1530px",
    },
  },
  plugins: [],
};
