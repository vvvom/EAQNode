const dataBase = require('../../dataBase').getInstance();
module.exports = async (req,res)=>{
    try {
        const Order = dataBase.getModel('Order');
        const PaymentsType = dataBase.getModel('Payments_type');
        const Cafe = dataBase.getModel('Cafe');
        const orders = await Order.findAll({
            include: [PaymentsType, Cafe]
        });
        if (!orders)throw new Error('No orders exist');
        res.json({
            success:true,
            message: orders
        });

    }catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};
