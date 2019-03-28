let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeDrink = dataBase.getModel('TypeDrink');

        const type = req.params.type;

        if (!type) throw new Error('No type');

        await TypeDrink.destroy({
            where: {
                type
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
