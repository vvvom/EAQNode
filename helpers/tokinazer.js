const jwt = require('jsonwebtoken');
const secret = require('./../config/secret');

module.exports = (id, name) => {
    const accessToken = jwt.sign({id, name}, secret, {expiresIn: 864000});

    if (!accessToken) throw new Error ('Token was no created');

    return accessToken;
};
