/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        purple: {
          950: '#0F0D13',
          900: '#2A2141',
        },
        gray: {
          50: '#E1E1E6',
          100: '#C4C4CC',
          200: '#D9D9D9',
        },
      },
    },
  },
  plugins: [],
}
