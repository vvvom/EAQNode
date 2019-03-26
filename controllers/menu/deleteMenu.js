let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');

        const name = req.params.name;

        if (!name) throw new Error('No name');

        await Menu.destroy({
            where: {
                name
            },

        });

        res.json({
            success: true,
            message: 'Menu successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
