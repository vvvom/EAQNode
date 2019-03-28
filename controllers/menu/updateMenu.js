let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');


        const type = req.params.type;

        if (!type) throw new Error('No type');

        const menuInfo = req.body;

        if (!menuInfo) throw new Error('Body is empty');

        const {cafe_id, name} = menuInfo;

        if (!cafe_id || !name)
            throw new Error('Some fields are empty');

        await Menu.update({
            cafe_id,
            name,

            include: [Cafe]

        }, {
            where: {
                type
            }
        });

        res.json({
            success: true,
            message: 'Menu successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
