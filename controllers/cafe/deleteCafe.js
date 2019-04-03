const dataBase = require('../../dataBase').getInstance();
const tokenVerifikator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');
const userRoles = require('../../config/userRoles');

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const name = req.params.name;

        if (!name) throw new Error('No name');

        const token = req.get("Authorization");
        if (!token) throw new Error('No token');

        const {admin} = userRoles;

        const {name: nameFromToken} = tokenVerifikator(token, secret);
        if (nameFromToken !== admin) throw  new Error('You are not admin');

            await Cafe.destroy({
                where: {
                    name
                }
            });
        res.json({
            success: true,
            message: `Cafe ${name} successfully deleted`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
