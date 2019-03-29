const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {

        const CafeModel = dataBase.getModel('Cafe');
        const token = req.get('Authorization');

        if (!token) throw new Error('No token');
        const {id} = tokenVerificator(token, secret);
        const isCafeRegistered = await CafeModel.findByPk(id);

        if (!isCafeRegistered) throw new Error('This cafe not registered');

        const cafe = {
            id,
            name: isCafeRegistered.name
        };

        res.json({
            success: true,
            message: cafe
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};

