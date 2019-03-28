const dataBase = require('../../dataBase').getInstance();
const  tokenVerificator = require('../../helpers/tokenVerificator');
const  secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const token = req.get('authorization');
        const {id} = tokenVerificator(token, secret);

        const isExist = await Cafe.findByPk(id);

        if (!isExist) throw new Error('Cafe with this id does not exist');

        const cafe = {
          id: isExist.id,
          name: isExist.name
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
