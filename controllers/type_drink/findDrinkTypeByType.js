const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {

    try {
        const Drink_type = dataBase.getModel('Type_drink');
        const Menu = dataBase.getModel('Menu')

        const type = req.params.type;
        if (!type) throw new Error('No type');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const findMenu = await Menu.findOne({
            where: {
                cafe_id: idFromToken
            }
        });

        const {id: menuId} = findMenu;

        const isExist = await Drink_type.findOne({
            where: {
                type,
                menu_id: menuId
            },
            include: [Menu]
        });

        if (!isExist) throw new Error('Type with this name not exist');

        res.json({
            success: true,
            message: isExist
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
