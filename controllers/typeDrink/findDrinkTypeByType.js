const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {

    try {
        const TypeDrink = dataBase.getModel('TypeDrink');
        const Menu = dataBase.getModel('Menu');

        const type = req.params.type;
        if (!type) throw new Error('No type');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token,secret);

        const findMenu = await Menu.findOne({
            where:{
                cafe_id: idFromToken
            }
        });

        const {id: menuId} = findMenu;

        const isExist = await TypeDrink.findOne({
            where:{
                type,
                menu_id:menuId
            }
        });
        if (!isExist)throw new Error('type with this name does not exist');


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
