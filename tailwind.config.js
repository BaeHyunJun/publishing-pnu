/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./sub/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard Variable", "Pretendard", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
