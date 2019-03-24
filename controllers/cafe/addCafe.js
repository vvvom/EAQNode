const dataBase = require('../../dataBase').getInstance();
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeInfo = req.body;

        if (!cafeInfo) throw new Error('No cafe body');

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
