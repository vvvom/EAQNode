const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Journal = dataBase.getModel('Ref_journal');
        const Order = dataBase.getModel('Order');
        const Drink = dataBase.getModel('Drink');
        const Food = dataBase.getModel('Food');

        const findJournal = await Journal.findAll({include: [Order, Drink, Food]});

        if (!findJournal) throw new Error('Journal not exist');

        res.json({
            success: true,
            message: findJournal
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
