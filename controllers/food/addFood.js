const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');

        const FoodInfo = req.body;

        if (!FoodInfo) throw new Error('Body is empty');

        const {name, ingredients, price, weight, about} = FoodInfo;

        if (!name || !ingredients || !price || !weight || !about) throw new Error('Some fields are empty');
        const alreadyExist = await Cafe.findOne({
            where: {
                name
            }
        });

        if (alreadyExist)throw new Error('Food with this name already exists');

        await Food.create({
            name,
            ingredients,
            price,
            weight,
            about
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
