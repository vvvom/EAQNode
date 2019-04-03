let dataBase = require('../../dataBase').getInstance();
let tokenVerificator = require('../../helpers/tokenVerificator');
let secret = require('../../config/secret');
let userRoles = require('../../config/userRoles');

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');

        const Name = req.params.name;
        if (!Name) throw new Error('No name');

        const cafeInfo = req.body;
        if (!cafeInfo) throw new Error('Body is empty');

        const token = req.get('Authorization');
        if(!token) throw new Error('No token');

        const {admin} = userRoles;

        const {name: nameFromToken} = tokenVerificator(token, secret);
        if(nameFromToken !== admin) throw new Error('You are not Admin');

        const {name} = cafeInfo;
        if (!name) throw new Error('Some fields are empty');

        await Cafe.update({
                name
            }, {
                where:{
                   name: Name
                }
            });
        res.json({
            success: true,
            message: `Cafe ${Name} successfully updated`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
