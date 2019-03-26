let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Ref_journal = dataBase.getModel('Ref_journal');
        const Food = dataBase.getModel('Food');
        const Drink = dataBase.getModel('Drink');
        const Order = dataBase.getModel('Order');


        const gotRecord = await Ref_journal.findAll({

            include: [Food, Drink, Order]

        });

        if (!gotRecord) throw new Error('Record not exist');

        res.json({
            success: true,
            message: gotRecord
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

