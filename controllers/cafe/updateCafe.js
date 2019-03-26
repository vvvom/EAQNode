let dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const Name = req.params.name;

        if (!Name) throw new Error('No name');

        const cafeInfo = req.body;

        if (!cafeInfo) throw new Error('Body is empty');

        const {name, password} = cafeInfo;

        if (!name || !password) throw new Error('Some fields are empty');

        await Cafe.update({
            name,
            password,
        }, {
            where: {
                Name
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