let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Drink_type = dataBase.getModel('Type_drink');

        const gotDrinkType = await Drink_type.findAll({});

        if (!gotDrinkType) throw new Error('Drink type not exist');

        res.json({
            success: true,
            message: gotDrinkType
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

