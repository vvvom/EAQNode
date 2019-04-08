const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');

        const menuInfo = req.body;
        if (!menuInfo) throw new Error('Body is empty');

        const {cafe_id, name} = menuInfo;
        if (!cafe_id || !name) throw new Error('Some fields are empty');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const isExist = Menu.findOne({
            where: {
                name,
                cafe_id: idFromToken
            }
        });
        if (!isExist) throw new Error('Menu already exist');

        await Menu.create({
            cafe_id: idFromToken,
            name,
        });

        res.json({
            success: true,
            message: 'Menu successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
