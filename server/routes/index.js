const cors = require('cors');
const resources = require('./resources');

module.exports = function (app) {
  app.use(cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true
  }));
  resources(app);
};
