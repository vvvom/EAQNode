const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');
        const Menu = dataBase.getModel("Menu");
        const Type_drink = dataBase.getModel("Type_drink");

        const nameFromParams = req.params.name;
        if (!nameFromParams) throw new Error('No name');

        const drinkInfo = req.body;
        if (!drinkInfo) throw new Error('Body is empty');

        const {
            name,
            ingredients,
            drinkType,
            price,
            volume,
            degrees,
            about,
            menuName
        } = drinkInfo;

        if (!name
            || !ingredients
            || !drinkType
            || !price
            || !volume
            || !degrees
            || !about
            || !menuName)
            throw new Error('Some fields are empty');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: idFromToken} = tokenVerificator(token, secret);

        const checkMenu = Menu.findOne({
            where:{
                name: menuName,
                cafe_id: idFromToken
            }
        });
        if (!checkMenu) throw new Error('No menu with this name');

        const {menu_id: menuId} = checkMenu;

        const checkTypeDrink = await Type_drink.findOne({
            where:{
                type: drinkType
            }
        });
        if(!checkTypeDrink) throw new Error('No type drink with this name');

        const {id: idDrinkType} = checkTypeDrink;

        const isExist = await Drink.findOne({
            where:{
                name: nameFromParams,
                cafe_id: idFromToken
            }
        });

        if (!isExist) throw new Error('Drink with this name not exist');

        await Drink.update({
            name,
            ingredients,
            type_drink_id: idDrinkType,
            price,
            volume,
            menu_id: menuId,
            degrees,
            about,
            cafe_id: idFromToken

        }, {
            where: {
                name: nameFromParams,
                cafe_id: idFromToken
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
