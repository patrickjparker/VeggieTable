// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/eslint-module",
    "@nuxt/content",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Grandstander: {
            wght: "500",
          },
          "Open Sans": {
            wght: "500;700",
          },
          Nunito: {
            wght: "400;700",
          },
        },
        text: "VeggieTable",
      },
    ],
  ],
});
