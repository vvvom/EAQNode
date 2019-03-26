let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const TypeFood = dataBase.getModel('TypeFood');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const type = await TypeFood.findOne({
            where: {
                id
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
