const keystone = require('keystone');

module.exports = async function({name}, user) {
    keystone.isAuth(user);
    keystone.truthy({name});

    const newCharacter = new (keystone.list('Character')).model({
        name,
        creator: user
    });

    const createdCharacter = await newCharacter.save();

    user.characters.push(createdCharacter);
    await user.save();

    return keystone.format(createdCharacter);
};
