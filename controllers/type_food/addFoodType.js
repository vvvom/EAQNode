let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Food_type = dataBase.getModel('Type_food');

        const foodTypeInfo = req.body;

        if (!foodTypeInfo) throw new Error('Body is empty');

        const {type, menu_id} = foodTypeInfo;

        if (!type || !menu_id)
            throw new Error('Some fields are empty');

        await Food_type.create({
            type,
            menu_id,
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