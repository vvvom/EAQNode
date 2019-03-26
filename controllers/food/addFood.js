let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');
        const Type_Food = dataBase.getModel('Type_food');
        const Menu = dataBase.getModel('Menu');

        const foodInfo = req.body;

        if (!foodInfo) throw new Error('Body is empty');

        const {name, ingredients, type_of_food_id, menu_id, price, weight, about} = foodInfo;

        if (!name || !ingredients || !type_of_food_id || !menu_id || !price || !weight || !about)
            throw new Error('Some fields are empty');

        await Food.create({
            name,
            ingredients,
            type_of_food_id,
            menu_id,
            price,
            weight,
            about,

            include: [Type_Food, Menu]
        });

        res.json({
            success: true,
            message: 'Foods successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};