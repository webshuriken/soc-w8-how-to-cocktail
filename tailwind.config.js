/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    boxShadow: {
      'screaming-green': '0 0px 10px 1px rgba(87, 254, 32, 0.4), 0 0px 2px 1px rgba(87, 254, 32, 0.6)',
      'inner-screaming-green': 'inset 0 0px 10px 1px rgba(87, 254, 32, 0.4), inset 0 0px 2px 1px rgba(87, 254, 32, 0.6)',
      'razzmatazz': '0 0px 10px 1px rgba(243, 23, 112, 0.4), 0 0px 2px 1px rgba(243, 23, 112, 0.6)',
      'inner-razzmatazz': 'inset 0 0px 10px 1px rgba(243, 23, 112, 0.4), inset 0 0px 2px 1px rgba(243, 23, 112, 0.6)',
      'cocktail-fuchsia': '0 0px 10px 1px rgba(247, 31, 249, 0.4), 0 0px 2px 1px rgba(247, 31, 249, 0.6)',
      'inner-cocktail-fuchsia': ' inset 0 0px 10px 1px rgba(247, 31, 249, 0.4), inset 0 0px 2px 1px rgba(247, 31, 249, 0.6)',
    },
    extend: {
      colors: {
        'razzmatazz': {
          100: '#fdd8e7',
          200: '#f98bb7',
          300: '#f65193',
          400: '#F31770',
        },
        'cocktail-fuchsia': {
          100: '#fdd7fe',
          200: '#fb9cfc',
          300: '#f860fb',
          400: '#F71FF9',
        },
        'white': '#ffffff',
        'screaming-green': {
          100: '#f0ffeb',
          200: '#b3fe9a',
          300: '#85fe5d',
          400: '#57fe20',
        },
        'licorice': '#110411',
      },
    },
  },
  plugins: [],
}

