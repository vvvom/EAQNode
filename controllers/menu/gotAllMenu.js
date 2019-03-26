let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');


        const gotMenu = await Menu.findAll({
            include: [Cafe]
        });

        if (!gotMenu) throw new Error('Menu not exist');

        res.json({
            success: true,
            message: gotMenu
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

