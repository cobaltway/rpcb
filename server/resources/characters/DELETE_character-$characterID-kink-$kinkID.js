const keystone = require('keystone');

module.exports = async function({characterID, kinkID}, user) {
    keystone.isAuth(user);

    const requestedCharacter = await keystone.request('Character', characterID, {
        populate: 'customKinks kinks.fav kinks.yes kinks.no kinks.maybe'
    });
    const requestedKink = await keystone.request('Kink', kinkID);

    if ((!requestedCharacter.creator.equals(user._id) ||
        !requestedKink.creator.equals(user._id)) &&
        !user.canAccessKeystone) {
        throw new Error('You don\'t have the right for that.');
    }

    keystone.removeKinkFromFields(requestedCharacter, requestedKink.slug);

    requestedCharacter.customKinks.splice(
        requestedCharacter.customKinks.findIndex(kink => kink.slug === requestedKink.slug),
        1);

    requestedKink.remove();

    await requestedCharacter.save();

    return {};
};
