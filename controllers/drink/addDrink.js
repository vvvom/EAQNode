const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');
        const TypeDrink = dataBase.getModel('TypeDrink');
        const Menu = dataBase.getModel('Menu');

        const drinkInfo = req.body;

        if (!drinkInfo) throw new Error('Body is empty');

        const {name, ingredients,type_drink_id, price, volume, menu_id, degrees, about } = drinkInfo;

        if (!name||!ingredients||!type_drink_id||!price||!volume||!menu_id||!degrees||!about) throw new Error('Some fields are empty');

        await Drink.create({
            name,
            ingredients,
            type_drink_id,
            price,
            volume,
            menu_id,
            degrees,
            about,

            include: [Menu, TypeDrink]
        });

        res.json({
            success: true,
            message: 'Drink successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
