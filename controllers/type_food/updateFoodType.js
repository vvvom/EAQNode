const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Food_type = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');

        const TypeFromParams = req.params.type;
        if (!TypeFromParams) throw new Error('No type');

        const typeFoodInfo = req.body;
        if (!typeFoodInfo) throw new Error('Body is empty');

        const {type} = typeFoodInfo;
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

        const isExist = await Food_type.findOne({
            where:{
                type,
                menu_id: menuId
            }
        });
        if (!isExist) throw new Error('No menu with this name');


        await Food_type.update({
            type,
            menu_id: menuId
        }, {
            where: {
                type: TypeFromParams,
                menu_id: menuId
            }
        });

        res.json({
            success: true,
            message: 'Type food successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
