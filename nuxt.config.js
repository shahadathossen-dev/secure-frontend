// const webpack = require("webpack");
import webpack from 'webpack'
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Rubik:wght@300;400;500;600;700&display=swap'
      }
    ],
    script: [
      { src: '/assets/js/jquery.min.js' },
      { src: '/assets/js/bootstrap.bundle.min.js' },
      { src: '/assets/js/menu.min.js', body: true },
      { src: '/assets/plugins/retinajs/retina.min.js', body: true },
      { src: '/assets/plugins/magnific-popup/jquery.magnific-popup.min.js', body: true },
      { src: '/assets/plugins/countdown-timer/countdown.min.js', body: true },
      { src: '/assets/js/main.js', body: true, defer: true },
      { src: '/assets/js/custom.js', body: true, defer: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "~/node_modules/bootstrap/dist/css/bootstrap.css",
    "@/static/assets/css/bootstrap.min.css",
    "@/static/assets/css/font-awesome.min.css",
    '@/static/assets/plugins/magnific-popup/magnific-popup.css',
    "@/static/assets/css/style.css",
    "@/static/assets/css/custom.css",
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // handle validation errors
    '~/plugins/axios',
    // provide validation errors globally
    '~/plugins/mixins/validation',
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

    // https://www.npmjs.com/package/@nuxtjs/recaptcha
    '@nuxtjs/recaptcha',

    // https://i18n.nuxtjs.org
    '@nuxtjs/i18n',

    // https://www.npmjs.com/package/vue-toastification
    [
      "vue-toastification/nuxt",
      {
        timeout: 3000
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    credentials: true,
  },

  router: {
    middleware: 'resetValidations'
  },

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || 'http://localhost:8000/api',
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000',
    apiAuthUrl: process.env.API_AUTH_URL || 'http://localhost:8000/auth',
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_BASE_URL,
        user: {
          property: "data"
        },
        // endpoints: {
        //   csrf: {
        //     url: "/sanctum/csrf-cookie",
        //   },
        //   login: {
        //     url: "/auth/login",
        //   },
        //   logout: {
        //     url: "/auth/logout",
        //   },
        //   user: {
        //     url: "/api/user",
        //   }
        // }
      },
    },
    redirect: {
      logout: '/',
      login: '/login',
      home: '/dashboard',
      unverified: '/email/verification',
      callback: '/login',
    },
    plugins: ['@/plugins/authLocale.js']
  },

  recaptcha: {
    version: 3, // Version
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: process.env.RECAPTCHA_SITE_KEY, // Site key for requests
  },

  i18n: {
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
    locales: [
      {
        flag: "/img/flags/saudi_flag.jpg",
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
    /**
     * add external plugins
     */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },

  /*
   ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
   */
  components: {
    dirs: [
      '~/components',
      '~/components/layouts',
      '~/components/sections',
    ],
  },

  /*
   ** importing a custom loader. this will overwrite the default loader
   */
  //  loading: '~/components/PreLoader.vue',
  //  ssr: false
}
