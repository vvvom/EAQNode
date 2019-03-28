const jwt = require('jsonwebtoken');

module.exports = (token, secret) => {

    let cafe = null;

    if (!token || !secret) throw new Error('Have not token or secret');

    jwt.verify(token, secret, (err, decoded) => {
        if(err) throw new Error(err);

        cafe = {
            id: decoded.id,
            name: decoded.name
        }
    });

    if(!cafe) throw new Error('Dont hack my site!! Please..');

    return cafe;
};
