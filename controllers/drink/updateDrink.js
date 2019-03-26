let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');
        const Type_Drink = dataBase.getModel('Type_drink');
        const Menu = dataBase.getModel('Menu');


        const id = req.params.id;

        if (!id) throw new Error('No id');

        const DrinkInfo = req.body;

        if (!DrinkInfo) throw new Error('Body is empty');

        const {name, ingredients, type_drink_id, price, volume, menu_id, degrees, about} = DrinkInfo;

        if (!name || !ingredients || !type_drink_id || !price || !volume || !menu_id || !degrees || !about)
            throw new Error('Some fields are empty');

        await Drink.update({
            name,
            ingredients,
            type_drink_id,
            price,
            volume,
            menu_id,
            degrees,
            about,

            include: [Type_Drink, Menu]

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