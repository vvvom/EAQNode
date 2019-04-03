const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');

        const name = req.params.name;
        if (!name) throw new Error('No name');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);
        //check food name and cafe_id this Food to cafe id logged cafe
        const isExist = await Food.findOne({
            where: {
                name,
                cafe_id: idFromToken
            }
        });
        if (!isExist) throw new Error('No food with this name');

        await Food.destroy({
            where: {
                name,
                cafe_id: idFromToken
            }
        });

        res.json({
            success: true,
            message: 'Food successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
