// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  compatibilityDate: '2025-02-02',

  css: [
    '~/assets/styles/global.css'
  ],

  runtimeConfig: {
    url: process.env.URL,
    key: process.env.KEY,
    guestTable: process.env.GUEST_TABLE,
    familyGroupTable: process.env.FAMILY_GROUP_TABLE,
    photosTable: process.env.PHOTO_TABLE,

    public: {
      apiBase: '/api'
    }
  }
});
