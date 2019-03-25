const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const CafeModel = dataBase.getModel('Cafe');
        if (!CafeModel) throw new Error('Base not connected');

        const cafes = await CafeModel.findAll({});

        res.json({
            success: true,
            message: cafes
        })

    }  catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};