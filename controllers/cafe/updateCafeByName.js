const dataBase = require('../../dataBase').getInstance();
const bcrypt  = require('bcrypt');
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');
const userRoles = require('../../config/userRoles');

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeForUpdate = req.params.name;

        if (!cafeForUpdate) throw new Error('No cafe name');

        const cafeInfo = req.body;

        if (!cafeInfo) throw new Error('No cafe body');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {name: nameFromToken} = tokenVerify(token, secret);

        if (nameFromToken !== userRoles.Admin) throw new Error('You are not admin, you can\'t do this');

        const {name, password} = cafeInfo;

        if (!name || !password) throw new Error('Some fields are empty');

        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) console.log(err);
            else await Cafe.update({
                    name,
                    password: hash
                }, {
                    where: {
                        name: cafeForUpdate
                    }
                }
            );
        });

        res.json({
            success: true,
            message: `Cafe ${cafeForUpdate} successfully updated`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
