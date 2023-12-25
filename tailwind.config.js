/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./views/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        colorYellow: "#FBFF14",
        gold: "#ffd700",
      },
      backgroundColor: {
        navbar: "#FBFF14",
        price: "#F8FC43",
      },
      backgroundImage: {
        sidebar: "linear-gradient(to bottom, #FAFF00, #f3f4f6)",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        acme: ["Acme", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
