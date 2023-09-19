export default defineNuxtConfig({
  spaLoadingTemplate: false,
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
