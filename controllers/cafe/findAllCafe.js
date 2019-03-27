const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');
        const findCafe = await Cafe.findAll({});

        if (!findCafe) throw new Error('Cafe not exist');

        res.json({
            success: true,
            message: findCafe
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

