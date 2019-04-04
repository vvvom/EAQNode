const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');
        const Menu = dataBase.getModel('Menu');
        const Type_food = dataBase.getModel('Type_food')

        const nameFromParams = req.params.name;
        if (!nameFromParams) throw new Error('No id');

        const foodInfo = req.body;
        if (!foodInfo) throw new Error('Body is empty');

        const {
            name,
            ingredients,
            typeFood,
            price,
            weight,
            about,
            menuName
        } = foodInfo;

        if (!name
            || !ingredients
            || !typeFood
            || !price
            || !weight
            || !about
            || !menuName)
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
        if(!checkMenu) throw new Error('No menu with this name')

        const {id: menuId} = checkMenu;

        const checkTypeFood = await Type_food.findOne({
            where:{
                type: typeFood
            }
        });
        if(!checkTypeFood) throw new Error("No type with this name");

        const {id: typeFoodId} = checkTypeFood;

        const isExist = await Food.findOne({
            where: {
                name: nameFromParams,
                cafe_id: idFromToken
            }
        });
        if (!isExist) throw new Error('No food with this name');

        await Food.update({
            name,
            ingredients,
            type_food_id: typeFoodId,
            menu_id: menuId,
            price,
            weight,
            about,
            cafe_id: idFromToken,
        }, {
            where: {
                name: nameFromParams,
                cafe_id: idFromToken
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
