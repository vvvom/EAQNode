const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');
        const Menu = dataBase.getModel('Menu');

        const foodInfo = req.body;
        if (!foodInfo) throw new Error('Body is empty');

        const {
            name,
            ingredients,
            type_food_id,
            price,
            weight,
            about,
            menuName
        } = foodInfo;

        if (!name
            || !ingredients
            || !type_food_id
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

        const {cafe_id: cafeId, id: menuId} = checkMenu;

        const isExist = Food.findOne({
            where: {
                name,
                cafe_id: idFromToken
            }
        });
        if (isExist) throw new Error('Food already exist');

        await Food.create({
            name,
            ingredients,
            type_food_id,
            menu_id: menuId,
            price,
            weight,
            about,
            cafe_id: cafeId,

            where:{
                cafe_id: idFromToken
            }

        });

        res.json({
            success: true,
            message: 'Food successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
