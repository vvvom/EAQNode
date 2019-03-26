const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res)=>{
    try {
        const Food = dataBase.getModel('Food');
        const foodForDelete = req.params.id;
        if (!foodForDelete)throw  new Error('No food');
        await Food.destroy({
            where:{
                id: foodForDelete
            }
        });
        res.json({
            success:true,
            message: `Food ${foodForDelete} successfully deleted`
        });

    }catch (e) {
        console.log(e);
        res.json({
            success:false,
            message: e.message
        });
    }
};


