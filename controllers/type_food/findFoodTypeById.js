let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Food_type = dataBase.getModel('Type_food');

        const id = req.params.id;

        if (!id) throw new Error('No name');

        const gotFoodType = await Food_type.findOne({
            where: {
                id
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
