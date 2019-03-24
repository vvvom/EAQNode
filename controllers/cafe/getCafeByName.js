const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const name = req.params.name;

        if (!name) throw new Error('No name');

        const cafe = await Cafe.findOne({
            where: {
                name
            }
        });

        if (!cafe) throw new Error('Cafe with this name does not exist');

        res.json({
            success: true,
            message: cafe
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
