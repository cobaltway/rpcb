const keystone = require('keystone');

module.exports = async function ({ characterID, kinkID }, user) {
  keystone.isAuth(user);

  const character = await keystone.request('Character', characterID, { populate: 'customKinks kinks.fav kinks.yes kinks.no kinks.maybe' });
  const kink = await keystone.request('Kink', kinkID);

  if ((!character.creator.equals(user._id) || !kink.creator.equals(user._id)) && !user.canAccessKeystone) throw new Error('NOT_AUTHORIZED');

  keystone.removeKinkFromFields(character, kink.slug);

  await kink.remove();
  await character.save();
};
