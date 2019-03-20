const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe')
        const gotCafe = await Cafe.findAll({
            attributes: [
                'id',
                'name',
                'password',
            ],
        });

        if (!gotCafe) throw new Error('Cafe not exist');

        res.json({
            success: true,
            message: gotCafe
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};

