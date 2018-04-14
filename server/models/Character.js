const keystone = require('keystone');
const Types = keystone.Field.Types;

const Character = new keystone.List('Character', { autokey: { path: 'slug', from: 'name', unique: true } });

Character.add({
  name: { type: Types.Text, required: true, initial: true },
  creator: { type: Types.Relationship, ref: 'User' },
  createdAt: { type: Types.Datetime, readOnly: true },
  updatedAt: { type: Types.Datetime, readOnly: true },
  isPublic: { type: Boolean, default: true },
  description: { type: Types.Markdown, required: true, default: { md: '' } },
  avatar: { type: Types.CloudinaryImage, publicID: 'slug', autoCleanup: true },
  kinks: {
    fav: { type: Types.Relationship, ref: 'Kink', many: true, default: [] },
    yes: { type: Types.Relationship, ref: 'Kink', many: true, default: [] },
    maybe: { type: Types.Relationship, ref: 'Kink', many: true, default: [] },
    no: { type: Types.Relationship, ref: 'Kink', many: true, default: [] }
  }
});

Character.schema.pre('save', function (next) {
  const now = new Date();
  if (!this.createdAt) this.createdAt = now;
  this.updatedAt = now;
  if (!this.description.md) this.description = { md: '' };
  next();
});

Character.defaultColumns = 'name, createdAt';

Character.register();
