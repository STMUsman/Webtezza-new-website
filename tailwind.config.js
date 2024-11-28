/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '2k': '2048px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2k': '2048px',
    },
    fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Lobster : ["Lobster", "sans-serif"],
        Poppins : ["Poppins"],
        Italic : ["ital"]
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