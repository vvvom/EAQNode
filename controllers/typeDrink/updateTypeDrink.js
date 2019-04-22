const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const TypeDrink = dataBase.getModel('TypeDrink');
        const Menu = dataBase.getModel('Menu');

        const Type = req.params.type;
        if (!Type) throw new Error('No type');

        const typeDrinkInfo = req.body;
        if (!typeDrinkInfo) throw new Error('Body is empty');

        const {type} = typeDrinkInfo;
        if (!type)throw new Error('Field is empty');

        const token = req.get('Authorization');
        if (!type) throw new Error('No token');

        const {id:idFromToken} = tokenVerificator(token, secret);

        const findMenu = await Menu.findOne({
            where:{
                cafe_id: idFromToken
            }
        });
         const {id: menuId} = findMenu;

         const isExist = await TypeDrink.findOne({
             where:{
                 type,
                 menu_id: menuId
             }
         });
         if (!isExist) throw new Error(' No drink with this name');


        await TypeDrink.update({
            type,
            menu_id: menuId

        }, {
            where: {
                type: Type,
                menu_id: menuId
            }
        });

        res.json({
            success: true,
            message: 'Type of drink successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
