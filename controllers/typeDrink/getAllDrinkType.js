const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const TypeDrink = dataBase.getModel('TypeDrink');
        const Menu = dataBase.getModel('Menu');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const findMenu = await Menu.findOne({
            where:{
                cafe_id: idFromToken
            }
        });

        const{id:menuId} = findMenu;

        const getTypeDrink = await TypeDrink.findAll({
            where:{
                menu_id: menuId
            }
        });
        if (!getTypeDrink) throw new Error('Drink type not exist');

        res.json({
            success: true,
            message: getTypeDrink
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
