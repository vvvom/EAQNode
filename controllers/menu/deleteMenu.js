const dataBase = require('../../dataBase').getInstance();
const secret = require('../../config/secret.js');
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');

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
        if(!isExist) throw new Error("No menu with this name");

        await Menu.destroy({
            where: {
                name,
                cafe_id: idFromToken
            },
        });

        res.json({
            success: true,
            message: 'Menu successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
