let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeFood = dataBase.getModel('TypeFood');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const typeFoodInfo = req.body;

        if (!typeFoodInfo) throw new Error('Body is empty');

        const {type} = typeFoodInfo;

        if (!type)throw new Error('Field is empty');

        await TypeFood.update({
            type

        }, {
            where: {
                id
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
