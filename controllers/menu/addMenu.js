const dataBase = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');

        const menuInfo = req.body;

        if (!menuInfo) throw new Error('Body is empty');

        const {name: menuName} = menuInfo;

        if (!menuName) throw new Error('Field: name is empty');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {id: cafe_id} = tokenVerify(token, secret);

        const isRegisteredCafe = await Cafe.findOne({
            where: {
                id: cafe_id
            }
        });

        if (!isRegisteredCafe) throw new Error('Cafe with this id does not exist');

        const alreadyExist = await Menu.findOne({
            where: {
                name: menuName,
                cafe_id
            }
        });

        if (alreadyExist) throw new Error(`Menu with this name: ${menuName} already exists`);

        await Menu.create({
            name: menuName,
            cafe_id
        });

        res.json({
            success: true,
            message: `Menu ${menuName} successfully inserted`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
