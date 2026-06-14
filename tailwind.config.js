/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fb',
          100: '#dde8f4',
          200: '#bcd0e8',
          300: '#8db0d6',
          400: '#5b8bbf',
          500: '#3a6da7',
          600: '#2e578a',
          700: '#1f3a5f',
          800: '#1a304e',
          900: '#162842',
        },
      },
    },
  },
  plugins: [],
}
