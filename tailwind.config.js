/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7A19FE'
      },

      fontSize: {
        '2.5xl': '1.38rem',
        xs: '13px',
        sm: '13px'
      }
      
    },
  },
  plugins: [],
}