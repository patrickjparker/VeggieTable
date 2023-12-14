// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/eslint-module",
    "@nuxt/content",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Grandstander: {
            wght: "500",
          },
        },
        text: "VeggieTable",
      },
    ],
  ],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
