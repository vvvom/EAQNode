const dataBase = require('../../dataBase').getInstance();
module.exports = async (req,res)=>{
    try {
        const Drink = dataBase.getModel('Drink');
        const TypeDrink = dataBase.getModel('TypeDrink');
        const Menu = dataBase.getModel('Menu');
        const drinks = await Drink.findAll({
            include: [TypeDrink, Menu]
        });
        if (!drinks)throw new Error('No drinks exist');
        res.json({
            success:true,
            message: drinks
        });

    }catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};
