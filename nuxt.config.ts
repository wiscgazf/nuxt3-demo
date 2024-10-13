// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@element-plus/nuxt",
  ],
  piniaPersistedstate: {
    storage: "cookies",
  },
  elementPlus: {
    namespace: "zf",
  },
  devtools: { enabled: true },
  runtimeConfig: {
    authToken: "xxx",
    public: {
      env: "production",
    },
  },
});
