const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');
        const Menu = dataBase.getModel('Menu');
        const Type_drink = dataBase.getModel('Type_drink');

        const drinkInfo = req.body;
        if (!drinkInfo) throw new Error('Body is empty');

        const {
            name,
            ingredients,
            price,
            volume,
            degrees,
            about,
            menuName,
            typeDrinkName
        } = drinkInfo;

        if (!name ||
            !ingredients ||
            !price ||
            !volume ||
            !degrees ||
            !about ||
            !menuName ||
            !typeDrinkName)
            throw new Error('Some fields are empty');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const checkMenu = await Menu.findOne({
            where: {
                name: menuName,
                cafe_id: idFromToken
            }
        });
        if (!checkMenu) throw new Error('No menu with this name');

        const {id: menuId} = checkMenu;

        const isExist = await Drink.findOne({
            where: {
                name,
                menu_id: menuId
            }
        });
        if (isExist) throw new Error('Drink already exist');

        const checkTypeDrink = await Type_drink.findOne({
            where:{
                type: typeDrinkName,
                menu_id: menuId
            }
        });

        const {id: typeDrinkId} = checkTypeDrink;

        await Drink.create({
            name,
            ingredients,
            type_drink_id: typeDrinkId,
            price,
            volume,
            menu_id: menuId,
            degrees,
            about,
            cafe_id: idFromToken,

            where:{
                cafe_id: idFromToken
            }
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
