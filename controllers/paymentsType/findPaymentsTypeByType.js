const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res)=>{
    try {
        const PaymentsType = dataBase.getModel('PaymentsType');

        const type = req.params.type;
        if (!type)throw new Error('No payments type id');
        const oneType = await PaymentsType.findOne({
            where:{
                type
            }
        });
        if (!oneType)throw new Error('Payments type does not exist');
        res.json({
            success:true,
            message: oneType
        });

    }catch (e) {

        console.log(e);
        res.json({
            success:false,
            message:e.message
        });
    }
};
