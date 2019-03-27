let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Menu = dataBase.getModel('Menu');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await Menu.destroy({
            where: {
                id
            }
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
