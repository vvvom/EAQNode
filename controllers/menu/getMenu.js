const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const MenuModel = dataBase.getModel('Menu');
        const CafeModel = dataBase.getModel('Cafe');
        if (!MenuModel && !CafeModel) throw new Error('Base not connected');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id: idCafe, name: nameCafe} = tokenVerificator(token, secret);
        const isRegisteredCafe = await CafeModel.findOne({
            where: {
                id: idCafe,
                name: nameCafe
            }
        });
        if (!isRegisteredCafe) throw new Error('Cafe with this id not registered');


        const menus = await MenuModel.findOne({
            where: {
                cafe_id: idCafe
            }
        });


        if (!menus) throw  new Error('You don\'t have any menus ');

        res.json({
            success: true,
            message: menus
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};