let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const RefJournal = dataBase.getModel('RefJournal');
        const Drink = dataBase.getModel('Drink');
        const Food = dataBase.getModel('Food');
        const Order = dataBase.getModel('Order');


        const id = req.params.id;

        if (!id) throw new Error('No id');

        const recordInfo = req.body;

        if (!recordInfo) throw new Error('Body is empty');

        const {food_id, drink_id, order_id} = recordInfo;

        if (!food_id || !drink_id || !order_id)
            throw new Error('Some fields are empty');

        await RefJournal.update({
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
