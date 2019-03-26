let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Drink = dataBase.getModel('Drink');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await Drink.destroy({
            where: {
                id
            },

        });

        res.json({
            success: true,
            message: 'Drink successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
