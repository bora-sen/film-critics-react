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
      },
      backgroundImage : {
        'header-image' : 'url(https://gifdb.com/images/high/fireplace-in-living-room-krbvac8evd7r6km3.gif)',
        'header-anim' : 'url(https://media.wired.com/photos/593240cc58b0d64bb35d07d0/master/w_1600%2Cc_limit/whyte-a.gif)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
