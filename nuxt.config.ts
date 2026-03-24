import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Heartline Event Solutions — Making Every Event Your Best Day Ever',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Heartline Event Solutions builds innovative digital tools that transform how you plan, design, and execute unforgettable events.',
        },
        { property: 'og:title', content: 'Heartline Event Solutions' },
        {
          property: 'og:description',
          content: 'Making Every Event Your Best Day Ever',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  modules: ['@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'heartline_color_mode',
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },
})
