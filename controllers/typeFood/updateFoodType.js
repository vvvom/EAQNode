let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeFood = dataBase.getModel('TypeFood');

        const Type = req.params.type;

        if (!Type) throw new Error('No type');

        const typeFoodInfo = req.body;

        if (!typeFoodInfo) throw new Error('Body is empty');

        const {type, menu_id} = typeFoodInfo;

        if (!type ||!menu_id)throw new Error('Field is empty');

        await TypeFood.update({
            type,
            menu_id

        }, {
            where: {
                type
            }
        });

        res.json({
            success: true,
            message: 'Type of food successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
