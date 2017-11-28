const keystone = require('keystone');

module.exports = async function({characterID, description, avatar, isPublic}, user) {
    keystone.isAuth(user);

    const requestedCharacter = await keystone.request('Character', characterID);

    if (!requestedCharacter.creator.equals(user._id) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right for that.');
    }

    if (description !== undefined) {
        requestedCharacter.description.md = description;
    }

    if (avatar !== undefined) {
        requestedCharacter.avatar = avatar;
    }

    if (isPublic !== undefined) {
        requestedCharacter.isPublic = isPublic;
    }

    const updatedCharacter = await requestedCharacter.save();

    return keystone.format(updatedCharacter);
};
