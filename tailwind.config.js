/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f7f7f8',
          100: '#eeeef1',
          200: '#d5d6dc',
          300: '#b3b5bf',
          400: '#888b9a',
          500: '#6b6e7d',
          600: '#555865',
          700: '#464852',
          800: '#3b3c44',
          900: '#34353b',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};