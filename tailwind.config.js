/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.{js,jsx}'],

  theme: {
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',

      'softRed': 'hsl(10,79%,65%)',
      'cyan': 'hsl(186,34%,60%)',

      'darkBrown': 'hsl(25, 47%, 15%)',
      'mediumBrown': 'hsl(28, 10%, 53%)',
      'cream': 'hsl(27, 66%, 92%)',
      'veryPaleOrange': 'hsl(33, 100%, 98%)',
    },
    screens: {
      'mobile': { 'max': '375px' },
      // => @media (min-width: 375px) { ... }
      'desktop': { 'max': '1440px' },
    }

  },
  plugins: [],
}
