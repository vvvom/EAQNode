let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');
        const Type_Food = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');


        const id = req.params.id;

        if (!id) throw new Error('No id');

        const FoodInfo = req.body;

        if (!FoodInfo) throw new Error('Body is empty');

        const {name, ingredients, type_of_food_id, menu_id, price, weight, about} = FoodInfo;

        if (!name || !ingredients || !type_of_food_id || !menu_id || !price || !weight || !about)
            throw new Error('Some fields are empty');

        await Food.update({
            name,
            ingredients,
            type_of_food_id,
            menu_id,
            price,
            weight,
            about,

            include:[Type_Food,Menu]

        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Food successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};