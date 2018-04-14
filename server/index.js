require('dotenv').config();
const keystone = require('keystone');
const fs = require('fs');

process.chdir(__dirname);

keystone.init({
  name: process.env.NAME,
  static: ['public', 'upload'],
  'auto update': true,
  session: true,
  'session store': 'mongo',
  auth: true,
  'user model': 'User',
  'back url': `${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`,
  'cookie secret': process.env.COOKIE_SECRET,
  mongo: process.env.MONGO,
  port: process.env.SERVER_PORT,
  host: process.env.SERVER_HOST,
  env: process.env
});

keystone.set('cloudinary config', process.env.CLOUDINARY_URL);

fs.readdirSync('./models').forEach(m => require(`./models/${m}`));

fs.readdirSync('./libs/utils').forEach(u => (keystone[u.replace('.js', '')] = require(`./libs/utils/${u}`)));

keystone.set('routes', require('./routes'));

keystone.start();
