const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');
        const Type_Food = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token')

        const {id: idFromToken} = tokenVerificator(token,secret);

        const gotFood = await Food.findAll({
            where:{
                cafe_id: idFromToken
            },
            include: [Type_Food, Menu]
        });
        if (!gotFood) throw new Error('Food not exist');

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

