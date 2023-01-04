/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'display' : ['Lobster','cursive'],
        'paragraph': ['Amiko','sans-serif'],
        'title': ['Martel','serif'],
      }
    },
  },
  plugins: [],
}
