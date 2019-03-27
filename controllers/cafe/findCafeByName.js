let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const Name = req.params.name;

        if (!Name) throw new Error('No name');

        const findCafeByName = await Cafe.findOne({
            where: {
                Name
            },
        });

        if (!findCafeByName) throw new Error('Cafe with this name does not exist');

        res.json({
            success: true,
            message: findCafeByName
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
