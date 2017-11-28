const keystone = require('keystone');

module.exports = async function({characterID}, user) {
    const requestedCharacter = await keystone.request('Character', characterID, {
        populate: 'customKinks kinks.fav kinks.yes kinks.no kinks.maybe'
    });

    const canAccess = requestedCharacter.isPublic ||
        (user && (user._id.equals(requestedCharacter.creator) || user.canAccessKeystone));
    if (!canAccess) {
        throw new Error('This character is private.');
    }

    return keystone.format(requestedCharacter);
};
