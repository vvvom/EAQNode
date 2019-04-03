let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food_type = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');

        const gotFoodType = await Food_type.findAll({
            include: [Menu]
        });

        if (!gotFoodType) throw new Error('Food type not exist');

        res.json({
            success: true,
            message: gotFoodType
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

