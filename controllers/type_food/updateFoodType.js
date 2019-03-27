let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Type_Food = dataBase.getModel('Type_food');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const typeFoodInfo = req.body;

        if (!typeFoodInfo) throw new Error('Body is empty');

        const {type} = typeFoodInfo;

        if (type)
            throw new Error('Some fields are empty');

        await Type_Food.update({
            type,
        }, {
            where: {
                id
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