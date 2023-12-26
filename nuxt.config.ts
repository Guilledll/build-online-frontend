// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "My Contacts",
      htmlAttrs: { class: 'h-screen' },
      bodyAttrs: { class: 'h-screen' },
    }
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ]
})
