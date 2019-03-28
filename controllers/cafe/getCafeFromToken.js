const dataBase = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {id} = tokenVerify(token, secret);

        const isRegistered = await Cafe.findByPk(id);

        if (!isRegistered) throw new Error ('This cafe does not registered');

        const cafe = {
            id: isRegistered.id,
            name: isRegistered.name
        };

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
