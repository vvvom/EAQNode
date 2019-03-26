let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');
        const Type_Food = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');


        const gotFood = await Food.findAll({
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

