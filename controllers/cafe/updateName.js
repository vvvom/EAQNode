const dataBase = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');
        const User = dataBase.getModel('User');

        const nameForUpdate = req.params.name;

        if (!nameForUpdate) throw new Error('No cafe name');

        const cafeInfo = req.body;

        if (!cafeInfo) throw new Error('No cafe information');

        const {name} = cafeInfo;

        if (!name) throw new Error('Field name is  empty');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {id: user_id} = tokenVerify(token, secret);

        const isUser = await User.findOne({
            where: {
                id: user_id
            }
        });
        if (isUser.name === 'admin') {
            await Cafe.update({
                name

            }, {
                where: {
                    name: nameForUpdate
                }
            });
        }

        res.json({
            success: true,
            message: `Cafe name ${nameForUpdate} successfully updated`
        });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })


    }
};
