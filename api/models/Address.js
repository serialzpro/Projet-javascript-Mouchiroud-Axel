module.exports = {
    attributes: {
        ville: {
            type: 'string'
        },
        rue: {
            type: 'string'
        },

        codePostal: {
            type: 'integer'
        },
        user: {
            model: 'user'
        }
    }
};
