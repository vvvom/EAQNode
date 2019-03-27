let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Order = dataBase.getModel('Order');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await Order.destroy({
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Order successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
