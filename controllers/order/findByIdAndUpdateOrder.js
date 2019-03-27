let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Order = dataBase.getModel('Order');
        const Cafe = dataBase.getModel('Cafe');
        const PaymentsType = dataBase.getModel('Payments_type');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const OrderInfo = req.body;

        if (!OrderInfo) throw new Error('Body is empty');

        const {sum,time,type_of_pay_id,cafe_id,table_number} = OrderInfo;

        if (!sum || !time || !type_of_pay_id || !cafe_id || !table_number) throw new Error('Some fields are empty');

        await Order.update({
            sum,
            time,
            type_of_pay_id,
            cafe_id,
            table_number,

            include: [Cafe, PaymentsType]
        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Order successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
