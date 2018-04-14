const fs = require('fs');

const loadResource = ({ app, handler, method, httpPath }) => {
  app[method](httpPath, (req, res) => {
    handler({
      ...req.params,
      ...req.query,
      ...req.body,
      ...req.files
    }, req.user, { req, res }).then((data, successCode = 200) => {
      res.status(successCode).send(data);
    }).catch((err, errCode = 400) => {
      console.error(err);
      res.status(errCode).send(err.message);
    });
  });
};

module.exports = (app) => {
  fs.readdirSync('./resources/').forEach((folder) => {
    fs.readdirSync(`./resources/${folder}`).forEach((name) => {
      loadResource({
        app,
        handler: require(`../resources/${folder}/${name}`),
        method: name.split('_')[0].toLowerCase(),
        httpPath: `/${folder}/${name.split('_')[1]
          .replace(/-/g, '/')
          .replace(/\$/g, ':')
          .replace(/\.js/, '')}`
          .replace(/!/g, '?')
      });
    });
  });
};
