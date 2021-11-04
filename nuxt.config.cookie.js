export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SecureWebVPN',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://auth.nuxtjs.org
    '@nuxtjs/auth-next',

    // https://i18n.nuxtjs.org
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    credentials: true,
  },

  env: {
    apiUrl: process.env.API_URL || 'http://localhost:8000/api',
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000',
    apiAuthUrl: process.env.API_AUTH_URL || 'http://localhost:8000/auth',
  },

  auth: {
    strategies: {
      cookie: {
        cookie: {
          // (optional) If set, we check this cookie existence for loggedIn check
          name: 'XSRF-TOKEN',
        },
        user: {
          property: "data"
        },
        endpoints: {
          csrf: {
            url: "/sanctum/csrf-cookie",
            baseURL: process.env.API_BASE_URL
          },
          login: {
            url: "/login",
            baseURL: process.env.API_AUTH_URL
          },
          logout: {
            url: "/logout",
            baseURL: process.env.API_AUTH_URL
          },
          user: {
            url: "/user",
            baseURL: process.env.API_URL
          }
        }
      },
    },
    redirect: {
      logout: '/',
      login: '/login',
      home: '/dashboard',
      unverified: '/email/verification',
      callback: '/login',
    },
    plugins: [ '@/plugins/authLocale.js' ]
  },

  i18n: {
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
    locales: [
      {
        flag: "/img/flags/bd_flag.jpg",
        code: 'ar',
        iso: 'ar-EG',
        name: "Arabic",
        file: 'ar',
        dir: 'rtl'
      },
      {
        flag: "/img/flags/bd_flag.jpg",
        code: "bn",
        iso: "bn-BD",
        name: "Bengali",
        file: "bn"
      },
      {
        flag: "/img/flags/us_flag.jpg",
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en"
      },
      {
        flag: "/img/flags/french_flag.jpg",
        code: "fr",
        iso: "fr-FR",
        name: "French",
        file: "fr"
      },
      {
        flag: "/img/flags/spain_flag.jpg",
        code: "es",
        iso: "es-ES",
        name: "Spanish",
        file: "es"
      }
    ],
    vueI18n: {
      fallbackLocale: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
