/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "600px",
      },
      colors: {
        "dark-color": "#2E223C",
        black: "#000000",
        "violett-color": "#7A4DF0",
        "orange-color": "#FFBB00",
        "light-blue": "#00DCFF",
        white: "#FFFFFF",
        "gray-ash": "#808080",
        "gray-overlay": "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-black":
          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,.7), rgba(0,0,0,.4), rgba(0,0,0,0))",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      gridTemplateRows: {
        "auto-fr": "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
