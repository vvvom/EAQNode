const dataBase = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {

    try {
        const Food = dataBase.getModel('Food');
        const Menu = dataBase.getModel('Menu');

        const foodInfo = req.body;

        if (!foodInfo) throw new Error('No foodInfo body');

        const {name, ingredients, price, weight, about, menuName} = foodInfo;

        if (!name || !ingredients || !price || !weight || !about || !menuName) throw new Error('Some fields are empty');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {id: idLoggedCafe} = tokenVerify(token, secret);

        const menuToInsert = await Menu.findOne({
            where: {
                name: menuName
            }
        });

        if (!menuToInsert) throw new Error('You have no menu for insert this food');

        const {cafe_id} = menuToInsert;

        if (cafe_id !== idLoggedCafe) throw new Error('It\'s not your menu');

        const alreadyExist = await Food.findOne({
            where: {
                name
            }
        });

        if (alreadyExist) throw new Error('This food already exist');

        await Food.create({
            name,
            ingredients,
            //,
            //,
            price,
            weight,
            about
        });

        res.json({
            success: true,
            message: `Menu ${name} successfully inserted`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
