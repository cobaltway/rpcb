const keystone = require('keystone');
const Types = keystone.Field.Types;

const User = new keystone.List('User', {
    autokey: { path: 'slug', from: 'name', unique: true }
});

User.add({
    name: { type: Types.Text, required: true, index: true, initial: true },
    password: { type: Types.Password, initial: true },
    canAccessKeystone: { type: Boolean, default: false },
    registered_at: { type: Types.Datetime, readOnly: true },
    characters: { type: Types.Relationship, ref: 'Character', many: true, default: [] },
    contact: {
        email: { type: Types.Email },
        discord: { type: Types.Text },
        skype: { type: Types.Text }
    }
});

User.schema.pre('save', function(next) {
    if (!this.registered_at) {
        this.registered_at = new Date();
    }
    if (!this.contact.email) {
        this.contact = { email: '' };
    }
    next();
});

User.defaultColumns = 'name, registered_at, canAccessKeystone';

User.register();
