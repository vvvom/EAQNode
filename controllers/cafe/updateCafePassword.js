const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');
const bcrypt = require('bcrypt');

module.exports = async (res, req) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeToUpdatePassword = req.params.name;
        if (!cafeToUpdatePassword) throw new Error('No name');

        const cafeInfo = req.body;
        if (!cafeInfo) throw new Error('No data from front to update');

        const {password} = cafeInfo;
        if (!password) throw new Error('No password');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {name: nameFromToken} = tokenVerificator(token, secret);

        const isRegistredCafe = await Cafe.findOne({
            where: {
                name: nameFromToken
            }
        });
        if (!isRegistredCafe) throw new Error('Cafe with this does not exist');

        if (cafeToUpdatePassword !== nameFromToken) throw new Error
        ('Stop, you can t update this password');

        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) console.log(err);

            await Cafe.update({
                    password: hash
                }, {
                    where: {
                        name: cafeToUpdatePassword
                    }
                }
            )
        });
        res.json({
            success: true,
            message: `Cafe ${cafeToUpdatePassword} successfully updated`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })

    }
};
