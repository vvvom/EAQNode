const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res)=>{
    try {
        const Food = dataBase.getModel('Food');
        const TypeFood = dataBase.getModel('TypeFood');
        const Menu = dataBase.getModel('Menu');
        const name = dataBase.params.name;
        if (!name)throw new Error('No food');
        const food = await Food.findOne({
            where:{
                name,

                include: [TypeFood, Menu]
            }
        });
        if (!food)throw new Error('Food does not exist');
        res.json({
            success:true,
            message: food
        });

    }catch (e) {
        console.log(e);
        res.json({
            success:false,
            message:e.message
        });
    }
};
