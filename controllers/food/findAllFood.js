const dataBase = require('../../dataBase').getInstance();
module.exports = async (req,res)=>{
    try {
        const Food = dataBase.getModel('Food');
        const TypeFood = dataBase.getModel('TypeFood');
        const Menu = dataBase.getModel('Menu');
        const foods = await Food.findAll({
            include: [TypeFood, Menu]
        });
        if (!foods)throw new Error('No foods exist');
        res.json({
            success:true,
            message: foods
        });

    }catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};
