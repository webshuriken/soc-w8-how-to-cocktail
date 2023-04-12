/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      colors: {
        'razzmatazz': '#F31770',
        'cocktail-fuchsia': '#F71FF9',
        'white': '#ffffff',
        'screaming-green': {
          100: '#f0ffeb',
          200: '#d1ffc2',
          300: '#b3fe9a',
          400: '#8FFE6B',
        },
        'licorice': '#110411',
      },
    },
  },
  plugins: [],
}

