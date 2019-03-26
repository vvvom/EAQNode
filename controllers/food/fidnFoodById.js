let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Food = dataBase.getModel('Cafe');
        const Type_Food = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');


        const id = req.params.id;

        if (!id) throw new Error('No id');

        const gotFood = await Food.findOne({
            where: {
                id
            },
            include: [Type_Food, Menu]
        });

        if (!gotFood) throw new Error('Food with this id does not exist');

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

