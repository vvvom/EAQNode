let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const DrinkInfo = req.body;

        if (!DrinkInfo) throw new Error('Body is empty');

        const {name, ingredients, price, volume, degrees, about} = DrinkInfo;

        if (!name || !ingredients || !price || !volume || !degrees || !about) throw new Error('Some fields are empty');

        await Drink.update({
            name,
            ingredients,
            price,
            volume,
            degrees,
            about
        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Drink successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
