const keystone = require('keystone');

module.exports = async function (user) {
  return keystone.format((await user.populate('characters', 'slug name avatar isPublic createdAt updatedAt')).characters);
};
