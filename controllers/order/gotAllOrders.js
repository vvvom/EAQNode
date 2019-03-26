let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Order = dataBase.getModel('Order');
        const PaymentsType = dataBase.getModel('Payments_type');
        const Cafe = dataBase.getModel('Cafe');


        const gotOrder = await Order.findAll({

            include: [PaymentsType, Cafe]

        });

        if (!gotOrder) throw new Error('Order not exist');

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

