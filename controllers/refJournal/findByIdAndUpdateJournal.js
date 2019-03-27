let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Journal = dataBase.getModel('Ref_journal');
        const Order = dataBase.getModel('Order');
        const Drink = dataBase.getModel('Drink');
        const Food = dataBase.getModel('Food');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const JournalInfo = req.body;

        if (!JournalInfo) throw new Error('Body is empty');

        const {food_id, drink_id, order_id} = JournalInfo;

        if (!food_id || !drink_id || !order_id) throw new Error('Some fields are empty');

        await Journal.update({
            food_id,
            drink_id,
            order_id,
            include: [Order, Drink, Food],

            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Journal successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
