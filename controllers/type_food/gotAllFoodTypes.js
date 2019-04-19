const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Food_type = dataBase.getModel('Type_food');
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

        const gotFoodType = await Food_type.findAll({
            where: {
                menu_id: menuId
            },
            include: [Menu]
        });
        if (!gotFoodType) throw new Error('Food type not exist');

        res.json({
            success: true,
            message: gotFoodType
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

