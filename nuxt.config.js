export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meu-portifolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Projeto de desenvolvimento de portfólio pessoal criado pela AlphaDev.',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Raycon Lima Batista | Portfólio',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://rayconlimabatista.com.br',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Raycon Lima Batista | Portfólio',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/img/avatar_profile.jpg',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/img/avatar_profile.jpg',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Projeto de desenvolvimento de portfólio pessoal criado pela AlphaDev.',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Foto do desenvolvedor',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '630',
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '659801164962243',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'pt_BR',
      },
      {
        hid: 'article:author',
        property: 'article:author',
        content: 'https://www.facebook.com/raycon.bentesbatista/',
      },
      {
        hid: 'article:publisher',
        property: 'article:publisher',
        content: 'https://www.facebook.com/raycon.bentesbatista/',
      },
      // Twitter
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:domain',
        property: 'twitter:domain',
        content: 'https://rayconlimabatista.com.br',
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: '@RayconBatista',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Raycon Lima Batista | Portfólio',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Projeto de desenvolvimento de portfólio pessoal criado pela AlphaDev.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content:
          'https://rayconlimabatista.com.br/assets/img/avatar_profile.jpg',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://rayconlimabatista.com.br',
      },
      {
        hid: 'google-site-verification',
        property: 'google-site-verification',
        content: 'ipzqmw-7RV58VGch4OzhK6hZmKEph-u1qeeZqXRBTac',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo.png' }
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
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },
  // colorMode: {
  //   preference: 'system', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '-mode',
  //   storageKey: 'nuxt-color-mode'
  // },

  theme: {
    darkSelector: '.dark-mode'
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  robots: [
    {
      UserAgent: '*',
      Sitemap: process.env.BASE_URL + '/sitemap.xml',
      Allow: '/'
    }
  ],
  sitemap: {
    hostname: process.env.BASE_URL
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
