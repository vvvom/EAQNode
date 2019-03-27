const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Food');
        const getDrink = await Drink.findAll({});

        if (!getDrink) throw new Error('Food not exist');

        res.json({
            success: true,
            message: getDrink
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
