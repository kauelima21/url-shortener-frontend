/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'slate': {
          800: '#DEDDE3',
        },
        'green': {
          400: '#34CB79',
          800: '#2FB86E',
        }
      }
    },
  },
  plugins: [],
}
