const validFields = ['fav', 'yes', 'maybe', 'no', 'none'];

module.exports = function(field) {
    if (validFields.indexOf(field) === -1) {
        throw new Error(`${field} is not a valid kink field.`);
    }
};
