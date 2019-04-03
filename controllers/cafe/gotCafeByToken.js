const dataBase = require('../../dataBase').getInstance();
const tokenVerifikator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const token = req.get('Authorization');
        const {id} = tokenVerifikator(token, secret);

        const ifExist = Cafe.findByPk(id);
        if (!ifExist) throw new Error('Cafe with this id does not exist');

        const cafe = {
            id: ifExist.id,
            name: ifExist.name
        };

        res.json({
            success: true,
            message: cafe
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};


