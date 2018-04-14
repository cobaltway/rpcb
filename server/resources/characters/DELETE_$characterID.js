const keystone = require('keystone');

module.exports = async function ({ characterID }, user) {
  keystone.isAuth(user);

  const character = await keystone.request('Character', characterID, { populate: 'customKinks' });

  if (!character.creator.equals(user._id) && !user.canAccessKeystone) throw new Error('NOT_AUTHORIZED');

  await character.remove();
};
