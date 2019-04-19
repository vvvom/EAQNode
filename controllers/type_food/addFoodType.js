const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Food_type = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');

        const foodTypeInfo = req.body;
        if (!foodTypeInfo) throw new Error('Body is empty');

        const {type} = foodTypeInfo;
        if (!type) throw new Error('Some fields are empty');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const findMenu = await Menu.findOne({
            where: {
                cafe_id: idFromToken
            }
        });

        const {id: menuId} = findMenu;

        const isExist = await Food_type.findOne({
            where: {
                type,
                menu_id: menuId
            }
        });
        if (isExist) throw new Error('Type already exist');

        await Food_type.create({
            type,
            where: {
                menu_id: menuId
            }
        });

        res.json({
            success: true,
            message: 'Food type successfully inserted'
        });
    }catch (e) {
            console.log(e);
            res.json({
                success: false,
                message: e.message
            });
        }
    };
