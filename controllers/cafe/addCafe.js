const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeInfo = req.body;

        if (!cafeInfo) throw new Error('Body is empty');

        const {name, password} = cafeInfo;

        if (!name || !password) throw new Error('Some fields are empty');

        await Cafe.create({
            name,
            password,
        });

        res.json({
            success: true,
            message: 'Cafes successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};