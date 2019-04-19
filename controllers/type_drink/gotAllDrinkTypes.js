const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Drink_type = dataBase.getModel('Type_drink');
        const Menu = dataBase.getModel('Menu');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const findMenu = await Menu.findOne({
            where: {
                cafe_id: idFromToken
            }
        });
        const {id: menuId} = findMenu;

        const gotDrinkType = await Drink_type.findAll({
            where: {
                menu_id: menuId
            },
            include: [Menu]
        });

        if (!gotDrinkType) throw new Error('Drink type not exist');

        res.json({
            success: true,
            message: gotDrinkType
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

