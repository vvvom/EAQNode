const dataBase = require('../../dataBase').getInstance();
const bcrypt = require('bcrypt');
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');
const userRoles = require('../../config/userRoles');

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeInfo = req.body;

        if (!cafeInfo) throw new Error('No cafe body');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {name: nameFromToken} = tokenVerify(token, secret);

        if (nameFromToken !== userRoles.Admin) throw new Error('You are not admin, you can\'t do this');

        const {name, password} = cafeInfo;

        if (!name || !password) throw new Error('Some fields are empty');

        const alreadyExist = await Cafe.findOne({
            where: {
                name
            }
        });

        const saltRounds = 10;

        if (alreadyExist) {
            throw new Error('Cafe with this name already exist');

        } else bcrypt.hash(password, saltRounds,async (err, hash) => {
            if (err) console.log(err);
            else await Cafe.create({
                name,
                password: hash
            });
        });

        res.json({
            success: true,
            message: `Cafe ${name} successfully registered`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
