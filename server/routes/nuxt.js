const { Nuxt, Builder } = require('nuxt');

module.exports = function(app) {
    const nuxtConfig = require('../../client/nuxt.config.js');
    nuxtConfig.dev = !(process.env.NODE_ENV === 'production');
    const nuxt = new Nuxt(nuxtConfig);

    if (nuxtConfig.dev) {
        const builder = new Builder(nuxt);
        builder.build();
    }

    app.use(nuxt.render);
};
