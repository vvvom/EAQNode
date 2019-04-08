const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {

    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');

        const name = req.params.name;
        if (!name) throw new Error('No name');

        const token = req.get('Authorization');
        if(!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const isExist = await Menu.findOne({
            where:{
                name,
                cafe_id: idFromToken
            }
        });
        if(!isExist) throw new Error('No menu with this name');

        const gotMenu = await Menu.findOne({
            where: {
                name,
                cafe_id: idFromToken
            },
            include: [Cafe]
        });

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

