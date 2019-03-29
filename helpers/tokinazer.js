const jwt = require('jsonwebtoken');
const secretWord = require('../config/secret');

module.exports = (id, name) => {
    const accessToken = jwt.sign({id,name}, secretWord, {expiresIn: 9999999});

    if (!accessToken) throw new Error('TOKEN WAS NOT CREATED');
    return accessToken;
};



