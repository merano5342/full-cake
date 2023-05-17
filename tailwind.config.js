/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],

  theme: {
    fontWeight: {
      thin: 300,
      regular: 400,
      semi: 500,
      bold: 700,
    },
    colors: {
      primary: '#e75750',
      secondary: '#eb6b9b',
      dark: '#b57a4d',

      black: '#000000',
      white: '#ffffff',
      gray: 'hsl(0, 0%, 48%)',

      softRed: 'hsl(10,79%,65%)',
      cyan: 'hsl(186,34%,60%)',

      darkBrown: 'hsl(25, 47%, 15%)',
      mediumBrown: 'hsl(28, 10%, 53%)',
      cream: 'hsl(27, 66%, 92%)',
      veryPaleOrange: 'hsl(33, 100%, 98%)',
    },
    screens: {
      md: { min: '720px' },
      // 'mobile': { 'max': '375px' },
      // => @media (min-width: 375px) { ... }
      // 'desktop': { 'max': '1440px' },
    },
  },
  plugins: [],
};
