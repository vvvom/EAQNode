const dataBase = require('../../dataBase').getInstance();
module.exports = async (req,res)=>{
    try {
        const PaymentsType = dataBase.getModel('PaymentsType');

        const type = await PaymentsType.findAll({});
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
