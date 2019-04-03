let dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
let secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');

        const menuInfo = req.body;

        if (!menuInfo) throw new Error('Body is empty');

        const {cafe_id, name} = menuInfo;

        if (!cafe_id || !name)
            throw new Error('Some fields are empty');

        const token = req.get('Authoruzation');
        if (!token) throw new Error('No token');

        const {id: idLoggedCage} = tokenVerificator(token, secret);

        if (cafe_id !== idLoggedCage) throw new Error('It s no your menu');

        const isExist = Menu.findOne({
            where: {
                name
            }
        });
        if (isExist) throw new Error('Drink already exist');

        await Menu.create({
            cafe_id,
            name,

            include: [Cafe]
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