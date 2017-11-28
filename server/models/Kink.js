const keystone = require('keystone');
const Types = keystone.Field.Types;

const Kink = new keystone.List('Kink', {
    autokey: { path: 'slug', from: 'name', unique: true }
});

Kink.add({
    name: { type: Types.Text, required: true },
    creator: { type: Types.Relationship, ref: 'User' },
    description: { type: Types.Markdown, required: true, default: {md: ''} },
    custom: { type: Boolean, default: false, index: true },
    fr: {
        name: { type: Types.Text },
        description: { type: Types.Markdown, required: true, default: {md: ''} }
    }
});

Kink.schema.pre('save', function(next) {
    if (!this.description.md) this.description = {md: ''};
    if (!this.fr.description.md) this.fr.description = this.description;
    if (!this.fr.name) this.fr.name = this.name;
    next();
});

Kink.defaultColumns = 'name, custom';

Kink.register();
