/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        "brand": "#5842F4",
        "brand-light": "#8180F7",
        "accent": "#FF4F64",
        "accent-light": "#FF7B8B"
      }
    },
  },
  plugins: [],
};
