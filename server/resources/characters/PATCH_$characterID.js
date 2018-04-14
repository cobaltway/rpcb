const keystone = require('keystone');

module.exports = async function ({ characterID, description, avatar, isPublic }, user) {
  keystone.isAuth(user);

  const character = await keystone.request('Character', characterID);

  if (!character.creator.equals(user._id) && !user.canAccessKeystone) throw new Error('NOT_AUTHORIZED');

  if (description !== undefined) character.description.md = description;
  if (avatar !== undefined) character.avatar = avatar;
  if (isPublic !== undefined) character.isPublic = isPublic;

  return keystone.format(await character.save());
};
