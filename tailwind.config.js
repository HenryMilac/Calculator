/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayDark: 'rgb(52,52,52)',
        grayLight: 'rgb(154,154,154)',
        orange: 'rgb(232,166,81)',
      }
    },
  },
  plugins: [],
}