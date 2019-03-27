const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Order = dataBase.getModel('Order');
        const Cafe = dataBase.getModel('Cafe');
        const PaymentsType = dataBase.getModel('Payments_type');

        const findOrder = await Order.findAll({include: [PaymentsType, Cafe]});

        if (!findOrder) throw new Error('Order not exist');

        res.json({
            success: true,
            message: findOrder
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
