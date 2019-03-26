let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Ref_journal = dataBase.getModel('Ref_journal');
        const Drink = dataBase.getModel('Drink');
        const Food = dataBase.getModel('Food');
        const Order = dataBase.getModel('Order');


        const id = req.params.id;

        if (!id) throw new Error('No id');

        const RecordInfo = req.body;

        if (!RecordInfo) throw new Error('Body is empty');

        const {food_id, drink_id, order_id} = DrinkInfo;

        if (!food_id || !drink_id || !order_id)
            throw new Error('Some fields are empty');

        await Ref_journal.update({
            food_id,
            drink_id,
            order_id,

            include: [Food, Drink, Order]

        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Record successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};