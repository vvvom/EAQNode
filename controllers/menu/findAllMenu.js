const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');

        const MenuOrder = await Menu.findAll({include: [Cafe]});

        if (!MenuOrder) throw new Error('Menu not exist');

        res.json({
            success: true,
            message: MenuOrder
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
