let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const TypeFood = dataBase.getModel('TypeFood');

        const Type = req.params.type;

        if (!Type) throw new Error('No type');

        const type = await TypeFood.findOne({
            where: {
                type
            },
        });

        if (!type) throw new Error('Type with this id does not exist');

        res.json({
            success: true,
            message: type
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
