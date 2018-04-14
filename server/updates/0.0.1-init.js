const keystone = require('keystone');

exports = module.exports = async function (done) {
  try {
    await (new (keystone.list('User')).model({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      canAccessKeystone: true
    })).save();

    await (new (keystone.list('Config')).model({
      name: 'Default',
      isActive: true
    })).save();

    done();
  }
  catch (e) {
    console.error(e);
  }
};
