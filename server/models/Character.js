const keystone = require('keystone');
const Types = keystone.Field.Types;

const Character = new keystone.List('Character', {
    autokey: { path: 'slug', from: 'name', unique: true }
});

Character.add({
    name: { type: Types.Text, required: true, initial: true },
    creator: { type: Types.Relationship, ref: 'User' },
    created_at: { type: Types.Datetime, readOnly: true },
    updated_at: { type: Types.Datetime, readOnly: true },
    isPublic: { type: Boolean, default: true },
    description: { type: Types.Markdown, required: true, default: {md: ''} },
    avatar: { type: Types.CloudinaryImage, publicID: 'slug', autoCleanup: true },
    kinks: {
        fav: { type: Types.Relationship, ref: 'Kink', many: true, default: [] },
        yes: { type: Types.Relationship, ref: 'Kink', many: true, default: [] },
        maybe: { type: Types.Relationship, ref: 'Kink', many: true, default: [] },
        no: { type: Types.Relationship, ref: 'Kink', many: true, default: [] }
    },
    customKinks: { type: Types.Relationship, ref: 'Kink', many: true, default: [] }
});

Character.schema.pre('save', function(next) {
    const now = new Date();
    if (!this.created_at) {
        this.created_at = now;
    }
    this.updated_at = now;
    if (!this.description.md) this.description = {md: ''};
    next();
});

Character.defaultColumns = 'name, created_at';

Character.register();
