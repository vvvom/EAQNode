const dataBase = require('../../dataBase').getInstance();
const secret = require('../../config/secret');
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {

    try {
        const Food = dataBase.getModel('Cafe');
        const Type_Food = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');

        const name = req.params.name;
        if (!name) throw new Error('No name');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token,secret);

        const gotFood = await Food.findOne({
            where: {
                name,
                cafe_id: idFromToken
            },
            include: [Type_Food, Menu]
        });
        if (!gotFood) throw new Error('Food with this name does not exist');

        res.json({
            success: true,
            message: gotFood
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

