module.exports = function(character, kinkSlug) {
    Object.keys(character.kinks).forEach(f => {
        character.kinks[f].splice(character.kinks[f].findIndex(k => k.slug === kinkSlug), 1);
    });
};
