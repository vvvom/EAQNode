let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const RefJournal = dataBase.getModel('RefJournal');
        const Food = dataBase.getModel('Food');
        const Drink = dataBase.getModel('Drink');
        const Order = dataBase.getModel('Order');


        const records = await RefJournal.findAll({

            include: [Food, Drink, Order]

        });

        if (!records) throw new Error('Record not exist');

        res.json({
            success: true,
            message: records
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
