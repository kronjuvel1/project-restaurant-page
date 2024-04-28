/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["luxury", "dark", "luxury"],
  },
  plugins: [require("daisyui")],
}