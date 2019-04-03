let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Payment = dataBase.getModel('Payments_type');

        const type = req.params.type;

        if (!type) throw new Error('No type');

        const gotPayment = await Payment.findOne({
            where: {
                type
            }
        });

        if (!gotPayment) throw new Error('Payment with this id does not exist');

        res.json({
            success: true,
            message: gotPayment
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

