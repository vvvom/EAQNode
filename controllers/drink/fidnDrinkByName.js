const dataBase = require('../../dataBase').getInstance();
const secret = require('../../config/secret');
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {

    try {
        const Drink = dataBase.getModel('Drink');

        const name = req.params.name;
        if (!name) throw new Error('No id');

        const token = req.get('Authorization');
        if (!token) throw new Error("No token");

        const {id: idFromToken} = tokenVerificator(token, secret);

        const gotDrink = await Drink.findOne({
            where: {
                name,
                cafe_id: idFromToken
            }
        });
        if (!gotDrink) throw new Error('Drink with this id does not exist');

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

