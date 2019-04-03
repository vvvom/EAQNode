let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Drink_type = dataBase.getModel('Type_drink');
        const Menu = dataBase.getModel('Menu')

        const type = req.params.type;

        if (!type) throw new Error('No type');

        const gotDrinkType = await Drink_type.findOne({
            where: {
                type
            },
            include: [Menu]
        });

        if (!gotDrinkType) throw new Error('Type with this name does not exist');

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
