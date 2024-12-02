// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', 'nuxt3-meta-pixel', '@nuxtjs/sitemap', '@nuxt/image', '@vite-pwa/nuxt', '@nuxtjs/robots', '@nuxt/eslint', 'nuxt-seo-utils', 'nuxt-security'],
  plugins: ['~/plugins/gtm.ts'],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'google-site-verification',
          content: 'mDPTCtjRpmXA1FxVN5oolzQ9cvLf9ahNeB03IhgktQg',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],
  site: {
    url: process.env.APP_DOMAIN_URL,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
      domain: process.env.APP_DOMAIN_URL,
    },
  },
  compatibilityDate: '2024-11-24',
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  facebook: {
    track: 'PageView',
    pixelId: '1787009605094514',
    autoPageView: true,
    disabled: false,
    debug: false,
  },
  pwa: {
    manifest: {
      name: 'MX²',
      short_name: 'MX²',
      theme_color: '#171fd6',
      background_color: '#faf9f9',
      display: 'standalone',
      description:
        'MX² Project revolutionizes online advertising with the power of AI. Specializing in ad campaigns across Google, Facebook, Instagram, You Tube, Tik Tok - we deliver targeted, efficient, and impactful advertising solutions. Experience the future of internet marketing with MX²\'s innovative AI technology.',
      lang: 'en',
      icons: [
        {
          src: '/256',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: undefined,
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
        },
      ],
    },
  },
  robots: {
    disallow: ['/beta'],
  },
  security: {
    headers: {
      contentSecurityPolicy: false,
    },
  },
});
