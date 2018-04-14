require('dotenv').config();

module.exports = {
  srcDir: 'client',
  head: {
    title: 'RPCB',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'RPCB' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.2.43/css/materialdesignicons.min.css' }
    ]
  },
  css: [
    '~assets/css/main.scss',
    '~assets/css/transitions.scss'
  ],
  plugins: [
    '~plugins/getUser',
    '~plugins/vue-i18n',
    '~plugins/buefy'
  ],
  build: { postcss: { plugins: { 'postcss-custom-properties': false } } },
  render: { bundleRenderer: { directives: { t: require('vue-i18n-extensions').directive } } },
  modules: [
    '@nuxtjs/axios'
  ],
  serverMiddleware: [
    require('cookie-parser')()
  ],
  router: { linkActiveClass: 'is-active' },
  axios: {
    baseURL: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
    browserBaseURL: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
  },
  transition: 'slide-fade'
};
