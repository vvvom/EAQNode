const dataBase = require('../../dataBase').getInstance();
let bcrypt = require('bcrypt');
let tokenVerificator = require('../../helpers/tokenVerificator');
let secret = require('../../config/secret');
let userRoles = require('../../config/userRoles');


module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeInfo = req.body;
        if (!cafeInfo) throw new Error('Body is empty');

        let token = req.get('Authorization');
        if (!token) throw  new Error('No token');

        const {admin} = userRoles;

        let {name: userFromToken} = tokenVerificator(token, secret);
        if (userFromToken !== admin) throw new Error('STOP, you are not ADMIN!');

        const {name, password} = cafeInfo;
        if (!name || !password) throw new Error('Some fields are empty');

        const ifExist = await Cafe.findOne({
            where: {
                name
            }
        });

        const saltRounds = 10;

        if (ifExist) {
            throw new Error('Cafe already exist');
        } else bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) console.log(err)
            else await Cafe.create({
                name,
                password: hash
            });
        });

        res.json({
            success: true,
            message: `Cafes ${name} successfully inserted`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
