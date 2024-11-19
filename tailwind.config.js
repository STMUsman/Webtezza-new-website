/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {},
    fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Lobster : ["Lobster", "sans-serif"],
        Poppins : ["Poppins"]
    },
    container: {
      center: true,
      
    }
  },
  plugins: [],
}

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }