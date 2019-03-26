let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');


        const name = req.params.name;

        if (!name) throw new Error('No name');

        const gotMenu = await Menu.findOne({
            where: {
                name
            },
            include: [Cafe]
        });

        if (!gotMenu) throw new Error('Menu with this id does not exist');

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

