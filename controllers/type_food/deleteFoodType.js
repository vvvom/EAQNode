const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Food_type = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');

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

        await Food_type.destroy({
            where: {
                type,
                menu_id: menuId
            }
        });

        res.json({
            success: true,
            message: 'Food type successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
