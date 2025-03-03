/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
    extend: {
      colors: {
        "primary": '#FF3C00',
        "secondary": "#FF6332"
      },
      transitionProperty: {
        'height': 'height'
      },

      screens: {
        'xs': '400px',
        '2xl': '1540px',
        '3xl': '3080px',
      }
    },
  },
  content: ["./index.html", './src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}
