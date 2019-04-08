const dataBase = require('../../dataBase').getInstance();
const secret = require('../../config/secret');
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token,secret);

        const gotMenu = await Menu.findAll({
            where:{
                cafe_id: idFromToken
            },
            include: [Cafe]
        });

        if (!gotMenu) throw new Error('Menu not exist');

        res.json({
            success: true,
            message: gotMenu
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

