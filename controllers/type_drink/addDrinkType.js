const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Drink_type = dataBase.getModel('Type_drink');
        const Menu = dataBase.getModel('Menu');

        const drinkTypeInfo = req.body;
        if (!drinkTypeInfo) throw new Error('Body is empty');

        const {type} = drinkTypeInfo;
        if (!type) throw new Error('Some fields are empty');

        const token = req.get('Authorization');
        if(!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token,secret);

        const findMenu = await Menu.findOne({
            where:{
                cafe_id: idFromToken
            }
        });

        const {id: menuId} = findMenu;

        const isExist = await Drink_type.findOne({
            where:{
                type,
                menu_id: menuId
            }
        });

        if (isExist) throw new Error('Type with this name already exist');

        await Drink_type.create({
            type,
            menu_id: menuId
        });

        res.json({
            success: true,
            message: 'Drink type successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
