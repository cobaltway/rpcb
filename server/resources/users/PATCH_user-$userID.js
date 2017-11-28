const keystone = require('keystone');
const checkUserName = require('./GET_user-check-name-$name');

module.exports = async function({userID, name, oldPassword, password, passwordConfirm, contact}, user) {
    keystone.isAuth(user);

    if (user.slug !== userID && !user.canAccessKeystone) {
        throw new Error('You don\'t have the right for that.');
    }

    const requestedUser = await keystone.request('User', userID);

    if (name !== undefined) {
        checkUserName({name, shouldError: true});
        requestedUser.name = name;
    }

    if (contact !== undefined) {
        requestedUser.contact = contact;
    }

    if (password !== undefined) {
        keystone.truthy({password});

        const passwordCorrect = await keystone.cbToPromise(user._.password.compare, oldPassword);
        if (!passwordCorrect) {
            throw new Error('Wrong password.');
        }

        if (password !== passwordConfirm) {
            throw new Error('Password do not match.');
        }
        requestedUser.password = password;
    }

    const updatedUser = await requestedUser.save();

    return keystone.format(updatedUser);
};
