const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res)=>{
    try {
        const Menu = dataBase.getModel('Menu');
        const menuForDelete = req.params.id;
        if (!menuForDelete)throw  new Error('No menu');
        await Menu.destroy({
            where:{
                id: foodForDelete
            }
        });
        res.json({
            success:true,
            message: `Menu ${menuForDelete} successfully deleted`
        });

    }catch (e) {
        console.log(e);
        res.json({
            success:false,
            message: e.message
        });
    }
};


