let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const TypeFood = dataBase.getModel('TypeFood');

        const foodTypeInfo = req.body;

        if (!foodTypeInfo) throw new Error('Body is empty');

        const {type} = foodTypeInfo;

        if (!type)
            throw new Error('Some fields are empty');

        await TypeFood.create({
            type,
        });

        res.json({
            success: true,
            message: 'Food type successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
