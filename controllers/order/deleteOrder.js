const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res)=>{
    try {
        const Order = dataBase.getModel('Order');
        const orderForDelete = req.params.id;
        if (!orderForDelete)throw  new Error('No order');
        await Order.destroy({
            where:{
                id: orderForDelete
            }
        });
        res.json({
            success:true,
            message: `Order ${orderForDelete} successfully deleted`
        });

    }catch (e) {
        console.log(e);
        res.json({
            success:false,
            message: e.message
        });
    }
};


