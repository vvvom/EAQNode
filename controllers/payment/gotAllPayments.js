let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Payments = dataBase.getModel('Payments_type');

        const gotPayments = await Payments.findAll({});

        if (!gotPayments) throw new Error('Peyments not exist');

        res.json({
            success: true,
            message: gotPayments
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

