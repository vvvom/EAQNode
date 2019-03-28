const dataBase = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');
const userRoles = require('../../config/userRoles');

module.exports = async (req, res) => {

    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeForDelete = req.params.name;

        if (!cafeForDelete) throw new Error('No cafe name');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {name: nameFromToken} = tokenVerify(token, secret);

        if (nameFromToken !== userRoles.Admin) throw new Error('You are not admin, you can\'t do this');

        await Cafe.destroy({
            where: {
                name: cafeForDelete
            }
        });

        res.json({
            success: true,
            message: `Cafe ${cafeForDelete} successfully deleted`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
