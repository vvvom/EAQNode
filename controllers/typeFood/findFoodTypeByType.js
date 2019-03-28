let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const TypeFood = dataBase.getModel('TypeFood');

        const type = req.params.type;

        if (!type) throw new Error('No type');

        const oneType = await TypeFood.findOne({
            where: {
                type
            },
        });

        if (!oneType) throw new Error('Type with this id does not exist');

        res.json({
            success: true,
            message: oneType
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
