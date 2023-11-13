
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",

    './styles/globals.css', 
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura-bold': ['Futura-Bold'],
        'futura-heavy': ['Futura-Heavy'],
        'futura-medium': ['Futura-Medium'],
        'souvenir': ['Souvenir']
      },
      colors: {
        'default-bg': '#CEE4F2', 
      }
    },
    colors: {
      'color-1': '#8694A6',
      'color-2': '#5C6873',
      'color-3': '#B0C6D9',
      'color-4': '#CEE4F2',
      'color-5': '#4A5859',
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]
}

