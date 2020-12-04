export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "My Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My Nuxt Web Development Blog"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Acme&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/core-components.js", "@/plugins/date-filter.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: process.env.BASE_URL || "https://nuxt-blog-58689.firebaseio.com" // Used as fallback if no runtime config is provided
    // credentials: fasle
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  env: {
    baseUrl: process.env.BASE_URL || "https://nuxt-blog-58689.firebaseio.com",
    firebaseAPIKey: "AIzaSyDW1RhPI9iQb7sz_5ddbF21Iq1dAKaUWKg"
  },

  transition: {
    name: "fade",
    mode: "out-in"
  }

  //   router: {
  //     middleware: "log"
  //   }
};
