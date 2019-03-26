let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeFood = dataBase.getModel('TypeFood');

        const types = await TypeFood.findAll({});

        if (!types) throw new Error('Food type not exist');

        res.json({
            success: true,
            message: types
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
