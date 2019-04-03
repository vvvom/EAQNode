const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');

        const name = req.params.name;
        if (!name) throw new Error('No name');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);
        //check drink name and cafe_id this Drink to cafe Id logged cafe
        const isExist = await Drink.findOne({
            where: {
                name,
                cafe_id: idFromToken
            }
        });
        if (!isExist) throw new Error('No drink with this name');

        await Drink.destroy({
            where: {
                name,
                cafe_id: idFromToken
            },
        });
        res.json({
            success: true,
            message: 'Drink successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
