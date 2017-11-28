const keystone = require('keystone');

module.exports = async function({characterID}, user) {
    keystone.isAuth(user);

    const requestedCharacter = await keystone.request('Character', characterID, {
        populate: 'customKinks'
    });

    if (!requestedCharacter.creator.equals(user._id) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right for that.');
    }

    requestedCharacter.customKinks.forEach(kink => kink.remove());

    await requestedCharacter.remove();
    return {};
};
