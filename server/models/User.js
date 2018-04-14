const keystone = require('keystone');
const Types = keystone.Field.Types;

const User = new keystone.List('User', { autokey: { path: 'slug', from: 'name', unique: true } });

User.add({
  name: { type: Types.Text, required: true, index: true, initial: true },
  email: { type: Types.Email },
  password: { type: Types.Password, initial: true },
  canAccessKeystone: { type: Boolean, default: false },
  registeredAt: { type: Types.Datetime, readOnly: true },
  lastConnexion: { type: Types.Datetime },
  characters: { type: Types.Relationship, ref: 'Character', many: true, default: [] },
  customKinks: { type: Types.Relationship, ref: 'Kink', many: true, default: [] },
  contact: {
    email: { type: Types.Email },
    discord: { type: Types.Text },
    skype: { type: Types.Text }
  }
});

User.schema.pre('save', function (next) {
  if (!this.registeredAt) this.registeredAt = new Date();
  if (!this.contact.email) this.contact = { email: '' };
  next();
});

User.defaultColumns = 'name, registeredAt, lastConnexion, canAccessKeystone';

User.register();
