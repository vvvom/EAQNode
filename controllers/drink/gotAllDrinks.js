const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');
        const Type_Drink = dataBase.getModel('Type_drink');
        const Menu = dataBase.getModel('Menu');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const gotDrink = await Drink.findAll({
            where: {
                cafe_id: idFromToken
            },
            include: [Type_Drink, Menu]
        });
        if (!gotDrink) throw new Error('Drink not exist');

        res.json({
            success: true,
            message: gotDrink
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

