export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meu-portifolio',
    titleTemplate: 'meu-portifolio',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color' },
      { itemprop:"logo", src:"/img/logo.webp" },
      {
        hid: 'description',
        name: 'description',
        content: 'Projeto de desenvolvimento de portfólio pessoal criado pela AlphaDev.',
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'ipzqmw-7RV58VGch4OzhK6hZmKEph-u1qeeZqXRBTac',
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
        content: '/img/avatar_profile.webp',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/img/avatar_profile.webp',
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
        content: 'Projeto de desenvolvimento de portfólio pessoal criado pela AlphaDev.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://rayconlimabatista.com.br/img/avatar_profile.webp',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://rayconlimabatista.com.br',
      },
    ],
    link: [
      { rel: 'preload', href: '/img/avatar_profile.webp', as: 'image'},
      { rel: 'preload', href: '/img/banner.webp', as: 'image'},
      { rel: 'preload', href: '/img/logo.webp', as: 'image'},
      { hid: 'canonical', rel: 'canonical', 'content': 'https://rayconlimabatista.com.br' },
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo.webp' },
      { rel: 'apple-touch-icon', href: '/img/logo.webp' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
    storageKey: 'nuxt-color-mode'
  },

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
    '@nuxtjs/sitemap',
    'nuxt-lazy-load',
    'nuxt-responsive-loader'
  ],

  sitemap: {
    hostname: 'https://rayconlimabatista.com.br',
    gzip: false,
    routes: [
      '/sobre',
      '/projetos',
      '/contato',
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://jsonplaceholder.typicode.com/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
