let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Drink_type = dataBase.getModel('Type_drink');

        const name = req.params.name;

        if (!name) throw new Error('No name');

        const gotDrinkType = await Drink_type.findOne({
            where: {
                name
            },
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
