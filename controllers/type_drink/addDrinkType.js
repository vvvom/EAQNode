let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Drink_type = dataBase.getModel('Type_drink');

        const drinkTypeInfo = req.body;

        if (!drinkTypeInfo) throw new Error('Body is empty');

        const {type, menu_id} = drinkTypeInfo;

        if (!type || !menu_id)
            throw new Error('Some fields are empty');

        await Drink_type.create({
            type,
            menu_id,
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