/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:["Poppins", 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      colors: {
        'font-color': '#746457',
        'primary-blue': '#90A8C4',
        'primary-brown': '#E0B383',
        'primary-bg': '#F3E5D8'
      },
    },
  },
  plugins: [],
}
