const keystone = require('keystone');
const utils = require('keystone-utils');

module.exports = async function ({ name, shouldError = false }) {
  keystone.truthy({ name });

  const user = await keystone.list('User').model.findOne({ slug: utils.slug(name) }).exec();
  if (user && shouldError) throw new Error('USERNAME_NOT_AVAILIBLE');
  return { availible: !user };
};
