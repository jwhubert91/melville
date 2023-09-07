/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3BB1E6",
        secondary: "#47AEEE",
        gray: "#57565B",
        black: "#000",
        paper: "#FCFBE1",
      },
    },
  },
  plugins: [],
}
