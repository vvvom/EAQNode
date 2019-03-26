let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeDrink = dataBase.getModel('TypeDrink');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await TypeDrink.destroy({
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Drink type successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
