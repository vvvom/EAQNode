const dataBase = require('../../dataBase').getInstance();
module.exports = async (req,res)=>{
    try {
        const PaymentsType = dataBase.getModel('PaymentsType');
        const Food = dataBase.getModel('Food');
        const Drink = dataBase.getModel('Drink');
        const Order = dataBase.getModel('Order');
        const type = await PaymentsType.findAll({
            include: [Food,Drink, Order]
        });
        if (!type)throw new Error('No payments type exist');
        res.json({
            success:true,
            message: type
        });

    }catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};
