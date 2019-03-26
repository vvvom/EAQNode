let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeDrink = dataBase.getModel('TypeDrink');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const typeDrinkInfo = req.body;

        if (!typeDrinkInfo) throw new Error('Body is empty');

        const {type} = typeDrinkInfo;

        if (!type)throw new Error('Field is empty');

        await TypeDrink.update({
            type

        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Type of drink successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
