const dataBase = require('../../dataBase').getInstance();
const bcrypt  = require('bcrypt');

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeForUpdate = req.params.name;

        if (!cafeForUpdate) throw new Error('No cafe name');

        const cafeInfo = req.body;

        if (!cafeInfo) throw new Error('No cafe body');

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
