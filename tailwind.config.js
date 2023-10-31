/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {


    extend: {
      colors: {
        'Light-red-CTA': '#ff525d',
        '--Very-light-red-CTA-hover-background': 'hsl(355, 100%, 74%)',
        '--Very-dark-blue-headings': 'hsl(208, 49%, 24%)',

        'putaso': '#2c2d3f',

        '--White-text': 'hsl(0, 0%, 100%)',
        '--Grayish-blue-footer-text': 'hsl(240, 2%, 79%)',
        '--Very-dark-grayish-blue-body-copy': 'hsl(207, 13%, 34%)',
        '--Very-dark-black-blue-footer-background': 'hsl(240, 10%, 16%)',

        '--Very-light-red': 'hsl(13, 100%, 72%)',
        '--Light-red': 'hsl(353, 100%, 62%)',

        '--Very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        '--Very-dark-desaturated-blue': 'hsl(237, 23%, 32%)'
      },
      fontFamily: {
        'over': ["Overpass", "sans - serif"],
        'ubuntu': ["Ubuntu", "sans - serif"],
      }
    },
  },
  plugins: [],
};
