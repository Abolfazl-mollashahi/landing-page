/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      width:{
        '100': '600px'
      },
      boxShadow:{
        boxsh1 : '0px 0px 10px black inset',
        boxsh2 : '0px 0px 10px black'
      },
      height:{
        101 : '600px'
      },
      backgroundColor:{
        greens: 'rgb(50 ,150,50)',
        activebtn: 'rgb(250,50,50)'
      }
    },
  },
  plugins: [],
}

