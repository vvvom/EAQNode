let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');
        const Type_Drink = dataBase.getModel('Type_drink');
        const Menu = dataBase.getModel('Menu');


        const gotDrink = await Drink.findAll({
            include: [Type_Drink, Menu]
        });

        if (!gotDrink) throw new Error('Drink not exist');

        res.json({
            success: true,
            message: gotDrink
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

