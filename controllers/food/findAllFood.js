const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');
        const getFood = await Food.findAll({});

        if (!getFood) throw new Error('Food not exist');

        res.json({
            success: true,
            message: getFood
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
