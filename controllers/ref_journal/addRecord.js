let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Ref_journal = dataBase.getModel('Ref_journal');
        const Food = dataBase.getModel('Food');
        const Drink = dataBase.getModel('Drink');
        const Order = dataBase.getModel('Order');

        const recordInfo = req.body;

        if (!recordInfo) throw new Error('Body is empty');

        const {food_id, drink_id, order_id} = recordInfo;

        if (!food_id || !drink_id || !order_id)
            throw new Error('Some fields are empty');

        await Ref_journal.create({
            food_id,
            drink_id,
            order_id,

            include: [Food, Drink, Order]
        });

        res.json({
            success: true,
            message: 'Record successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

