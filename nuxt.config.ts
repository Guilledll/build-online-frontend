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
  ],

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost/api',
      placesKey: process.env.NUXT_PUBLIC_PLACES_KEY,
    }
  }
})
