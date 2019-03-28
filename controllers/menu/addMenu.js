const dataBase = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {

    try {
        const Menu= dataBase.getModel('Menu');

        const menuInfo = req.body;

        if (!menuInfo) throw new Error('No menuInfo body');

        const {name} = menuInfo;

        if (!name) throw new Error('Field is empty');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {id} = tokenVerify(token, secret);

        const alreadyExist = await Menu.findOne({
            where: {
                cafe_id: id,
                name
            }
        });

        if (alreadyExist) throw new Error('This menu already exist');

        await Menu.create({
            cafe_id: id,
            name
        });

        res.json({
            success: true,
            message: `Menu ${name} successfully inserted`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
