const resources = require('./resources');
const nuxt = require('./nuxt');

module.exports = function(app) {
    resources(app);
    nuxt(app);
};
