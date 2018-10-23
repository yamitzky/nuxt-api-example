module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SPA (Nuxt) x API example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/element-ui'
  ],
  router: {
    middleware: 'restore-auth'
  },
  axios: {
    proxy: true,
    prefix: '/api'
  },
  proxy: {
    '/api/': {
      target: process.env.API_PROXY_BASE || 'http://localhost:8000',
      pathRewrite: {
        '^/api/': ''
      }
    }
  }
}
