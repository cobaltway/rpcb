const keystone = require('keystone');

module.exports = async function({characterID}, user) {
    keystone.auth(user);

    const requestedCharacter = await keystone.request('Character', characterID, {
        populate: 'customKinks'
    });

    if (!requestedCharacter.creator.equals(user._id) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right for that.');
    }

    const categories = await keystone.list('Category').model.find().populate('kinks').exec();

    return {
        categories: keystone.format(categories),
        customKinks: keystone.format(requestedCharacter.customKinks)
    };
};
