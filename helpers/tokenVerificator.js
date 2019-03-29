const jwt = require('jsonwebtoken');

module.exports = (token, secretWord) => {
    let user = null;

    if (!token || !secretWord) throw new Error('You have not token or secret word');

    jwt.verify(token, secretWord, (err, decoded) => {
        if (err) throw new Error(err.message);
        user = {
            id: decoded.id,
            name: decoded.name
        }
    });
    console.log(user);
    if (!user) throw  new Error('Don\'t hack my site');
    return user
};