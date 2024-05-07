/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        myTextFont: ['DM Sans', 'sans-serif'],
        myTitleFont: ['Poppins', 'sans-serif'],
      },
      colors: {
        myTheme: {
          light: '#E1E2E2',
          dark: '#000000',
          primary: '#191919',
          accent: '#FFAF0F',
        },
      },
      size: {
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      minWidth: {
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      width: {
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      minHeight: {
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      height: {
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
