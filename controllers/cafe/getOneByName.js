const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const CafeModel = dataBase.getModel('Cafe');
        const name = req.params.name;
        if (!name) throw new Error('Cafe name is bad');

        const cafe = await CafeModel.findOne({
            where: {
                name
            }
        });

        if (!cafe) throw new Error('Not found cafe with this name');

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