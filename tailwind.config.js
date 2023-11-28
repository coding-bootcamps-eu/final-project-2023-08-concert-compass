/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-color": "#2E223C",
      "violett-color": "#7A4DF0",
      "orange-color": "#FFBB00",
      "light-blue": "#00DCFF",
      "white-color": "#FFFFFF",
      "gray-ash": "#808080",
    },

    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    gridTemplateRows: {
      "auto-fr": "auto 1fr auto",
    },
    extend: {},
  },
  plugins: [],
};
