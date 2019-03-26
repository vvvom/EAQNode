let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const name = req.params.name;

        if (!name) throw new Error('No name');

        const gotCafe = await Cafe.findOne({
            where: {
                name
            },
        });

        if (!gotCafe) throw new Error('Cafe with this name does not exist');

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
