import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#CEE4F2',
      },
      fontFamily: {
        'futura-bold': ['Futura-Bold'],
        'futura-heavy': ['Futura-Heavy'],
        'futura-medium': ['Futura-Medium'],
        'souvenir': ['Souvenir']
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '20xl': '5.390rem',
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
  darkMode: "class",
  plugins: [nextui()]
}

