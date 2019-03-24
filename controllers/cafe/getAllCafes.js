const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafes = await Cafe.findAll({});

        if (!cafes) throw new Error('No cafes exist');

        res.json({
            success: true,
            message: cafes
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
