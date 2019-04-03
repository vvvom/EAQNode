let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Food_type = dataBase.getModel('Type_food');

        const type = req.params.type;

        if (!type) throw new Error('No type');

        const gotFoodType = await Food_type.findOne({
            where: {
                type
            },
        });

        if (!gotFoodType) throw new Error('Type with this name does not exist');

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
