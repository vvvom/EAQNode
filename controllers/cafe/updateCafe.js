let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const CafeInfo = req.body;

        if (!CafeInfo) throw new Error('Body is empty');

        const {name, password} = CafeInfo;

        if (!name || !password) throw new Error('Some fields are empty');

        await Cafe.update({
            name,
            password,
        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Cafe successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};