let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const RefJournal = dataBase.getModel('RefJournal');
        const Food = dataBase.getModel('Food');
        const Drink = dataBase.getModel('Drink');
        const Order = dataBase.getModel('Order');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const record = await RefJournal.findOne({
            where: {
                id
            },
            include: [Food, Drink, Order]
        });

        if (!record) throw new Error('Record with this id does not exist');

        res.json({
            success: true,
            message: record
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
