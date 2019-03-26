const dataBase = require('../../dataBase').getInstance();
module.exports = async (req,res)=>{
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');
        const menu = await Menu.findAll({
            include: [Cafe]
        });
        if (!menu)throw new Error('No menu exist');
        res.json({
            success:true,
            message: menu
        });

    }catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};
