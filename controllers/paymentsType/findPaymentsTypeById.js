const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res)=>{
    try {
        const PaymentsType = dataBase.getModel('PaymentsType');
        const Food = dataBase.getModel('Food');
        const Drink = dataBase.getModel('Drink');
        const Order = dataBase.getModel('Order');

        const id = dataBase.params.id;
        if (!id)throw new Error('No payments type id');
        const type = await PaymentsType.findOne({
            where:{
                id,

                include: [Food, Drink, Order]
            }
        });
        if (!type)throw new Error('Payments type does not exist');
        res.json({
            success:true,
            message: type
        });

    }catch (e) {
        console.log(e);
        res.json({
            success:false,
            message:e.message
        });
    }
};
