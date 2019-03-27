const dataBase = require('../../dataBase').getInstance();
const tokinazer = require('../../helpers/tokinazer');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    try {
        const Gods_of_cafe = dataBase.getModel('Gods_of_cafe');

        const {name, password} = req.body;

        if (!name || !password) throw new Error('Some fields are empty');

        const isPresent = await Cafe.findOne({
            where: {
                name
            }
        });

        if (!isPresent) throw new Error('Cafe with this name does not exist');

        const correctPassword = await new Promise((resolve, reject) => {
            bcrypt.compare(password, isPresent.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                if (result) return resolve(true);
            });
        });

        const {id} = isPresent.dataValues;
        const accessToken = tokinazer(id, name);

        if (!correctPassword) {
            res.json({
                success: false,
                message: 'Wrong password'
            });
        } else if (correctPassword) {
            res.json({
                success: true,
                message: accessToken
            });
        }

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};