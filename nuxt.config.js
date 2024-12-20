const sass = {
  implementation: require('sass'),
};

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  target: 'server',
  ssr: true,
  env: {
    ...process.env,
  },
  publicRuntimeConfig: {},

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Todo - %s',
    title: 'Todo',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/default.css',
    '~/assets/scss/typography.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // scss
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // Global SCSS
    scss: ['~/assets/scss/_variables.scss', '~/assets/scss/_color.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.SUPABASE_URL,
    headers: {
      apiKey: process.env.SUPABASE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
    },
  },

  router: {
    middleware: [],
  },

  serverMiddleware: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map';
      }
    },

    loaders: {
      scss: sass,
      vue: {
        compilerOptions: {
          whitespace: 'condense',
        },
      },
    },
  },
};
