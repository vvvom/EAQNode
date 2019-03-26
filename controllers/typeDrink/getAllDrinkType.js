let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeDrink = dataBase.getModel('TypeDrink');

        const type = await TypeDrink.findAll({});

        if (!type) throw new Error('Drink type not exist');

        res.json({
            success: true,
            message: type
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
