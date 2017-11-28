const keystone = require('keystone');

module.exports = async function({characterID, kinkID, name, description, field}, user) {
    keystone.isAuth(user);
    keystone.isValidKinkField(field);

    const requestedCharacter = await keystone.request('Character', characterID);

    if (!requestedCharacter.creator._id.equals(user._id) && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right for that.');
    }

    if (kinkID) {
        const kinkToAdd = await keystone.request('Kink', kinkID);
        if (field === 'none') {
            await requestedCharacter.populate('kinks.fav kinks.yes kinks.no kinks.maybe');
            keystone.removeKinkFromFields(requestedCharacter, kinkToAdd.slug);
        }
        else {
            requestedCharacter.kinks[field].push(kinkToAdd._id);
        }
    }
    else if (field !== 'none') {
        keystone.truthy({name});
        const newKink = new (keystone.list('Kink')).model({
            name,
            creator: user,
            custom: true
        });
        if (description !== undefined) {
            newKink.description.md = description;
        }
        const createdKink = await newKink.save();
        requestedCharacter.kinks[field].push(createdKink._id);
        requestedCharacter.customKinks.push(createdKink._id);
    }

    const updatedCharacter = await requestedCharacter.save();

    return keystone.format(updatedCharacter);
};
