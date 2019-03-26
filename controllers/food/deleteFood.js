let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food = dataBase.getModel('Food');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await Food.destroy({
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Food successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
