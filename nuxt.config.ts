// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  app: {
    head: {
      charset: "el",
      script:[
        {
          src:"https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" 
        }
      ]
    },
    

  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
