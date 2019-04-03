const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

module.exports = (id, Name) => {
    const accessToken = jwt.sign({id, Name}, secret, {expiresIn: 999999});

    if(!accessToken) throw new Error('Token was no created');
    return accessToken;
};
