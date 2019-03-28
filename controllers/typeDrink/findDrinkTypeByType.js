
let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const TypeDrink = dataBase.getModel('TypeDrink');

        const type = req.params.type;

        if (!type) throw new Error('No type');

        const typed = await TypeDrink.findOne({
            where: {
                type
            },
        });

        if (!typed) throw new Error('Type with this id does not exist');

        res.json({
            success: true,
            message: typed
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
