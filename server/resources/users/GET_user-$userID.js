const keystone = require('keystone');

module.exports = async function({userID}, user) {
    let requestedUser = await keystone.request('User', userID);
    requestedUser = keystone.format(requestedUser);

    if (user && (user._id.equals(userID))) {
        await requestedUser.populate('characters');
    }

    return requestedUser;
};
