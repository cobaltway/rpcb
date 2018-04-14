const keystone = require('keystone');

module.exports = async function (user) {
  const now = new Date();
  if (now - user.lastConnexion > 60000) {
    user.lastConnection = now;
    user.save();
  }
  return keystone.format(user);
};
