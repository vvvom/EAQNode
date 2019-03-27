let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Type_Drink = dataBase.getModel('Type_drink');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const typeDrinkInfo = req.body;

        if (!typeDrinkInfo) throw new Error('Body is empty');

        const {type} = typeDrinkInfo;

        if (type)
            throw new Error('Some fields are empty');

        await Type_Drink.update({
            type,
        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Type drink successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};