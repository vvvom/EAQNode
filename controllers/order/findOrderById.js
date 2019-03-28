const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res)=>{
    try {
        const Order = dataBase.getModel('Order');
        const PaymentsType = dataBase.getModel('PaymentsType');
        const Cafe = dataBase.getModel('Cafe');
        const id = req.params.id;
        if (!id)throw new Error('No order');
        const order = await Order.findOne({
            where:{
                id
            },
            include: [PaymentsType, Cafe]
        });
        if (!order)throw new Error('Order does not exist');
        res.json({
            success:true,
            message: order
        });

    }catch (e) {
        console.log(e);
        res.json({
            success:false,
            message:e.message
        });
    }
};
