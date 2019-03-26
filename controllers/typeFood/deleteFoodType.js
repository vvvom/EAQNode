let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeFood = dataBase.getModel('TypeFood');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await TypeFood.destroy({
            where: {
                id
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
