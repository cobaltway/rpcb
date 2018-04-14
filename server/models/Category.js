const keystone = require('keystone');
const Types = keystone.Field.Types;

const Category = new keystone.List('Category', { autokey: { path: 'slug', from: 'name', unique: true } });

Category.add({
  name: { type: Types.Text, required: true, initial: true },
  kinks: { type: Types.Relationship, ref: 'Kink', many: true, default: [] },
  fr: { name: { type: Types.Text } }
});

Category.schema.pre('save', function (next) {
  if (!this.fr.name) this.fr.name = this.name;
  next();
});

Category.defaultColumns = 'name';

Category.register();
