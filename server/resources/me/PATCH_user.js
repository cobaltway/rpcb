const keystone = require('keystone');
const checkUserName = require('./GET_check-name');

module.exports = async function ({ name, oldPassword, password, contact }, user) {
  if (name !== undefined) {
    await checkUserName({ name });
    user.name = name;
  }

  if (contact !== undefined) user.contact = contact;

  if (password !== undefined) {
    keystone.truthy({ password });
    if (!await keystone.cbToPromise(user._.password.compare, oldPassword)) throw new Error('WRONG_PASSWORD');
    user.password = password;
  }

  return keystone.format(await user.save());
};
