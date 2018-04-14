const keystone = require('keystone');

module.exports = async function ({ characterID }, user) {
  keystone.auth(user);

  const character = await keystone.request('Character', characterID, { populate: 'customKinks' });
  if (!character.creator.equals(user._id) && !user.canAccessKeystone) throw new Error('NOT_AUTHORIZED');

  const categories = await keystone.list('Category').model.find().populate('kinks').exec();

  return {
    categories: keystone.format(categories),
    customKinks: keystone.format(character.customKinks)
  };
};
