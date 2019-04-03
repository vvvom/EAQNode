let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Type_Drink = dataBase.getModel('Type_drink');

        const Type = req.params.type;

        if (!Type) throw new Error('No type');

        const typeDrinkInfo = req.body;

        if (!typeDrinkInfo) throw new Error('Body is empty');

        const {type, menu_id} = typeDrinkInfo;

        if (!type)
            throw new Error('Some fields are empty');

        await Type_Drink.update({
            type,
            menu_id,
        }, {
            where: {
                Type
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