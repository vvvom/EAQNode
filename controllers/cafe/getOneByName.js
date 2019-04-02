const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const CafeModel = dataBase.getModel('Cafe');
        const name = req.params.name;
        if (!name) throw new Error('Cafe params is empty');

        const cafe = await CafeModel.findOne({
            where: {
                name
            }
        });

        if (!cafe) throw new Error('Cafe not exist with this name');

        res.json({
            success: true,
            message: cafe
        })

    }  catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }
};