/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airstay: {
          primary: '#FF385C',
          secondary: '#00A699',
          dark: '#222222'
        }
      },
      fontFamily: {
        sans: ['Circular', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
