let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food_type = dataBase.getModel('Type_food');

        const type = req.params.type;

        if (!type) throw new Error('No type');

        await Food_type.destroy({
            where: {
                type
            }
        });

        res.json({
            success: true,
            message: 'Food type successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
