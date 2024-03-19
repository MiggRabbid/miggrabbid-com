/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['DM Sans', 'sans-serif'],
      },
      colors: {
        myTheme: {
          light: "#F6F6F6",
          dark: "#000000",
          primary: "#191919",
          accent: "#FFAF0F"
        }
      }
    },
  },
  plugins: [],
}

