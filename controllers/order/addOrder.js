const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Order = dataBase.getModel('Order');
        const PaymentsType = dataBase.getModel('PaymentsType');
        const Cafe = dataBase.getModel('Cafe');


        const orderInfo = req.body;

        if (!orderInfo) throw new Error('Body is empty');

        const {sum, time,type_of_pay_id, cafe_id, table_number } = orderInfo;

        if (!sum ||!time||!type_of_pay_id||!cafe_id||!table_number) throw new Error('Some fields are empty');

        await Order.create({
            sum,
            time,
            type_of_pay_id,
            cafe_id,
            table_number,

            include: [Cafe, PaymentsType]
        });

        res.json({
            success: true,
            message: 'Order successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
