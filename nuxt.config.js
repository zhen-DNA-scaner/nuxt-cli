const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  /*
  ** CSS 变量 和 mixin
  */
  styleResources: {
    scss: './assets/css/variables.scss'
  },
  //开启axios代理
  axios: {
  	proxy: true
  },
  //代理/api/开头的请求路径
  proxy: {
  	'/api/': {
  		// target: 'https://xiaoyueit.com/api',
  		target: isDev ? 'http://localhost:3002' : 'https://xiaoyueit.com/api',
  		pathRewrite: {
  			//重写请求路径
  			'^/api': ''
  		}
  	}
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
