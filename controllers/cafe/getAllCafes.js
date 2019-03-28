const dataBase = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');
const userRoles = require('../../config/userRoles');

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {name: nameFromToken} = tokenVerify(token, secret);

        if (nameFromToken !== userRoles.Admin) throw new Error('You are not admin, you can\'t do this');

        const cafes = await Cafe.findAll({});

        if (!cafes) throw new Error('No cafes exist');

        res.json({
            success: true,
            message: cafes
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
