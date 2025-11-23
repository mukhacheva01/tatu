/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        light: '#f5f5f5',
        accent: '#ff2a6d',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'Inter', 'sans-serif'],
        russo: ['Russo One', 'serif'],
        manrope: ['Manrope', 'Inter', 'sans-serif'],
        rubik: ['Rubik', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
