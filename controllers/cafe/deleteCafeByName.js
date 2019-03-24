const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeForDelete = req.params.name;

        if (!cafeForDelete) throw new Error('No cafe name');

            await Cafe.destroy({
                where: {
                    name: cafeForDelete
                }
            });

        res.json({
            success: true,
            message: `Cafe ${cafeForDelete} successfully deleted`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
