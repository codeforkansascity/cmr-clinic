const pkg = require('./package')

module.exports = {
    mode: 'spa',

    env: {
        apiPrefix: '',
        // client_secret: process.env.CLIENT_SECRET,
        // base_url_for_display: process.env.BASEURL,
    },

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {src: '/pdfmake.js'},
            {src: '/vfs_fonts.js'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/app.scss', // use our build, as entered via app.scss
        '@/css/main.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~plugins/vue-select', ssr: false},
        {src: '~/plugins/flatpickr', ssr: false},
        {src: '~plugins/mixins', ssr: false},
        { src: '~/plugins/localStorage.js', ssr: false }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/markdownit',
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        // Doc: https://bootstrap-vue.js.org/docs/
        // ['@nuxtjs/bootstrap-vue', {css: false}] // don't include a default build, use ours
        'bootstrap-vue/nuxt',
        '@nuxtjs/moment',
    ],
    bootstrapVue: {
        bootstrapCSS: 'css', // or `css`  - was false
        bootstrapVueCSS: 'bvCSS' // or `bvCSS`
    },
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options

        // baseURL: 'http://127.0.0.1:5000'

        baseURL: process.env.BASEURL
        //baseURL: 'https://cmr-20-app.codeforkc.org/'
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    // login: { url: 'login', method: 'post', propertyName: 'data.token' },
                    // user: { url: 'me', method: 'get', propertyName: 'data' },
                    // logout:  { url: 'logout', method: 'post' },


                     login: { url: '/oauth/token', method: 'post', propertyName: 'access_token' },
                     user: { url: '/api/me', method: 'get', propertyName: 'data' },
                     logout:  { url: 'logout', method: 'post' },
                }
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
        extend(config, ctx) {
        },
        vendor: ['vue-select']
    }
}
