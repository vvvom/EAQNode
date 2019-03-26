let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Payment = dataBase.getModel('Payments_type');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const gotPayment = await Payment.findOne({
            where: {
                id
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

