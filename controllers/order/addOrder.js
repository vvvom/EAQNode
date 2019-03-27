const dataBase = require('../../dataBase').getInstance();

module.exports = async (req,res)=>{
    try {
        const Order = dataBase.getModel('Order');
        const Cafe = dataBase.getModel('Cafe');
        const PaymentsType = dataBase.getModel('Payments_type');

        const OrderInfo = req.body;

        if(!OrderInfo) throw new Error('Body is empty');

        const {sum,time,type_of_pay_id,cafe_id,table_number} = OrderInfo;

        if (!sum || !time || !type_of_pay_id || !cafe_id || !table_number) throw new Error('Some fields are empty');

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
            message: 'Order successfully accepted'
        });
    }catch (e) {
        console.log(e);
        res.json({
            success: true,
            message: e.message
        });
    }
};
