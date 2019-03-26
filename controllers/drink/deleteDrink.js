const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res)=>{
    try {
        const Drink = dataBase.getModel('Drink');
        const drinkForDelete = req.params.id;
        if (!drinkForDelete)throw  new Error('No drink');
        await Drink.destroy({
            where:{
                id: drinkForDelete
            }
        });
        res.json({
            success:true,
            message: `Drink ${drinkForDelete} successfully deleted`
        });

    }catch (e) {
        console.log(e);
        res.json({
            success:false,
            message: e.message
        });
    }
};


