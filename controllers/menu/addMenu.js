const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');

        const MenuInfo = req.body;

        if (!MenuInfo) throw new Error('Body is empty');

        const {cafe_id, name} = MenuInfo;

        if (!cafe_id || !name)
            throw new Error('Some fields are empty');

        await Menu.create({
            cafe_id,
            name,
            include: [Cafe]
        });

        res.json({
            success: true,
            message: 'Menu successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
