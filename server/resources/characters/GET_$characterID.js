const keystone = require('keystone');

module.exports = async function ({ characterID }, user) {
  const character = await keystone.request('Character', characterID, { populate: 'customKinks kinks.fav kinks.yes kinks.no kinks.maybe' });

  const canAccess = character.isPublic || (user && (user._id.equals(character.creator) || user.canAccessKeystone));
  if (!canAccess) throw new Error('NOT_AUTHORIZED');

  return keystone.format(character);
};
