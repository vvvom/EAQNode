const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');
        const gotFood = await Food.findAll({});

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
