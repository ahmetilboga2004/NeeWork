/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./views/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(to bottom, #FAFF00, rgba(250, 255, 0, 0))",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
