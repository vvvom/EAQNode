let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Order = dataBase.getModel('Order');
        const Payments_Type = dataBase.getModel('Payments_type');
        const Cafe = dataBase.getModel('Cafe');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const gotOrder = await Order.findOne({
            where: {
                id
            },
            include: [Payments_Type, Cafe]
        });

        if (!gotOrder) throw new Error('Order with this id does not exist');

        res.json({
            success: true,
            message: gotOrder
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
