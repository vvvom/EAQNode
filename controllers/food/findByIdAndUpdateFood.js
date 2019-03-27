let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const FoodInfo = req.body;

        if (!FoodInfo) throw new Error('Body is empty');

        const {name, ingredients, price, weight, about} = FoodInfo;

        if (!name || !ingredients || !price || !weight || !about) throw new Error('Some fields are empty');

        await Food.update({
            name,
            ingredients,
            price,
            weight,
            about,
        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Cafe successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
