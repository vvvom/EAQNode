const dataBase = require('../../dataBase').getInstance();

module.exports = async (req,res)=>{
    try {
        const Drink = dataBase.getModel('Drink');

        const DrinkInfo = req.body;

        if(!DrinkInfo) throw new Error('Body is empty');

        const {name, ingredients, price, volume, degrees, about} = DrinkInfo;

        if (!name || !ingredients || !price || !volume || !degrees || !about) throw new Error('Some fields are empty');
        const alreadyExist = dataBase.findOne({
            where: {
                name
            }
        });
        if (alreadyExist) throw new Error('Drink with this name already exist')

        await Drink.create({
            name,
            ingredients,
            price,
            volume,
            degrees,
            about
        });

        res.json({
            success: true,
            message: 'Food successfully inserted'
        });
    }catch (e) {
        console.log(e);
        res.json({
            success: true,
            message: e.message
        });
    }
};
