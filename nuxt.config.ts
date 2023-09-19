export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  typescript: {
    strict: true
  },
  modules: [
    '@nuxtjs/eslint-module'
  ]
})
