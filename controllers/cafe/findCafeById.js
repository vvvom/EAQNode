let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const gotCafe = await Cafe.findOne({
            where: {
                id
            },
        });

        if (!gotCafe) throw new Error('Cafe with this id does not exist');

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
