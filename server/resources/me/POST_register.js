const keystone = require('keystone');
const checkUserName = require('./GET_check-name');

module.exports = async function ({ name, password, email }, user) {
  const { allowNewMemberSignUp } = await keystone.config();
  if (!allowNewMemberSignUp) throw new Error('REGISTRATION_CLOSED');
  console.log(user);
  if (user) throw new Error('ALREADY_LOGGED');

  keystone.truthy({ password });
  await checkUserName({ name, shouldError: true });

  const createdUser = new (keystone.list('User')).model({ name, email, password });
  await createdUser.save();

  return keystone.format(createdUser);
};
