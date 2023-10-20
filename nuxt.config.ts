// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ui: {
    notifications: {
      position: 'top-0 right-0'
    }
  }
})
