
let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeDrink = dataBase.getModel('TypeDrink');

        const typeDrinkInfo = req.body;

        if (!typeDrinkInfo) throw new Error('Body is empty');

        const {type} = typeDrinkInfo;

        if (!type)
            throw new Error('Some fields are empty');

        await TypeDrink.create({
            type,
        });

        res.json({
            success: true,
            message: 'Drink type successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
