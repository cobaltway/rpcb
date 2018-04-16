const keystone = require('keystone');

module.exports = async function (_, user) {
  const now = new Date();
  if (!user.lastConnection || now - user.lastConnection > 60000) {
    user.lastConnection = now;
    user.save();
  }
  return keystone.format(user, {
    _id: undefined,
    characters: undefined,
    customKinks: undefined,
    canAccessKeystone: undefined
  });
};
