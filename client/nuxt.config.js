module.exports = {
    head: {
        title: 'RPCB',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'RPCB' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        '~/assets/css/bulma.scss',
        '~/assets/css/forms.scss',
        '~/assets/css/layout.scss',
        '~/assets/css/transitions.scss',
        '~/assets/css/variables.scss'
    ],
    plugins: ['~/plugins/element', '~/plugins/vue-i18n', '~/plugins/getUser'],
    srcDir: 'client/',
    build: { vendor: ['axios'] },
    modules: [
        '@nuxtjs/font-awesome'
    ]
};
