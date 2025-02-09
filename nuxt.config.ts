// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-02-02',

  css: [
    '~/assets/styles/global.css'
  ],

  app: {
    head: {
      title: "Cata & Gus",
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: "description", content: "Te invitamos a nuestra boda. Reserva la fecha y acompáñanos en este día especial." },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-title', content: 'Gus got the Cat' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', content: '#eeeeee' }
      ]
    }
  },

  runtimeConfig: {
    url: process.env.URL,
    key: process.env.KEY,
    guestTable: process.env.GUEST_TABLE,
    familyGroupTable: process.env.FAMILY_GROUP_TABLE,
    photosTable: process.env.PHOTO_TABLE,

    public: {
      apiBase: '/api'
    }
  },

} as any);
