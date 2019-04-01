const dataBase = require('../../dataBase').getInstance();
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');
module.exports = async (req, res) => {
    try {
        const Cafe = dataBase.getModel('Cafe');
        const User = dataBase.getModel('User');
        const cafeForDelete = req.params.name;
        if (!cafeForDelete) throw  new Error('No cafe name');
        const token = req.get('Authorization');

        if (!token) throw new Error('No token');
        const {id: user_id} = tokenVerify(token, secret);

        const isUser = await User.findOne({
            where: {
                id: user_id
            }
        });
        if (isUser.name === 'admin') {
            await Cafe.destroy({
                where: {
                    name: cafeForDelete
                }
            })
        };
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


