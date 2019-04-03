let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Type_Food = dataBase.getModel('Type_food');

        const Type = req.params.type;

        if (!Type) throw new Error('No type');

        const typeFoodInfo = req.body;

        if (!typeFoodInfo) throw new Error('Body is empty');

        const {type, menu_id} = typeFoodInfo;

        if (!type || !menu_id) throw new Error('Some fields are empty');

        await Type_Food.update({
            type,
            menu_id,
        }, {
            where: {
                Type
            }
        });

        res.json({
            success: true,
            message: 'Type food successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};