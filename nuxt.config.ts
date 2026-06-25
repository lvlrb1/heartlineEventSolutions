import tailwindcss from '@tailwindcss/vite'

const siteUrl = 'https://heartlineapps.com'
const siteName = 'Heartline Event Solutions'
const siteTitle =
  'Heartline Event Solutions LLC — Event Planning & Seating Chart Software'
const siteDescription =
  'Heartline Event Solutions LLC builds modern event-planning software, including A Seat Awaits — our seating chart and guest management app. Making every event your best day ever.'
const ogImage = `${siteUrl}/og-image.png`

// JSON-LD structured data: the LLC and the website it publishes.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Heartline Event Solutions LLC',
      alternateName: siteName,
      legalName: 'Heartline Event Solutions LLC',
      url: siteUrl,
      logo: `${siteUrl}/heartline-mark.png`,
      image: ogImage,
      description: siteDescription,
      email: 'support@heartlineapps.com',
      slogan: 'Making Every Event Your Best Day Ever',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'A Seat Awaits',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: 'https://aseatawaits.com',
          description:
            'Seating chart, floor plan, and guest management software for unforgettable events.',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-US',
    },
  ],
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: siteTitle,
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        {
          name: 'keywords',
          content:
            'event planning software, seating chart software, guest management, floor plan tool, A Seat Awaits, event technology, Heartline Event Solutions',
        },
        { name: 'author', content: 'Heartline Event Solutions LLC' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#43204f' },
        { name: 'apple-mobile-web-app-title', content: siteName },

        // Open Graph
        { property: 'og:site_name', content: siteName },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: ogImage },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        {
          property: 'og:image:alt',
          content:
            'Heartline Event Solutions — Making Every Event Your Best Day Ever',
        },
        { property: 'og:locale', content: 'en_US' },

        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: ogImage },
        {
          name: 'twitter:image:alt',
          content:
            'Heartline Event Solutions — Making Every Event Your Best Day Ever',
        },
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(structuredData),
        },
      ],
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
