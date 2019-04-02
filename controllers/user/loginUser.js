const dataBase = require('../../dataBase').getInstance();
const tokinazer = require('../../helpers/tokinazer');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User');
        const {name, password} = req.body;
        if (!name || !password) throw new Error('Some field are empty')
        const isPresent = await UserModel.findOne({
            where: {
                name
            }
        });

        if (!isPresent) throw new Error('You are not admin ');

        const correctPassword = await new Promise((resolve, reject) => {
            bcrypt.compare(password, isPresent.password, (err, result) => {
                if (err) {
                    console.log(err);
                    return reject(err)
                }
                return resolve(result)
            });
        });

        const {id, name: Name} = isPresent;
        const accessToken = tokinazer(id, Name);

        if (!correctPassword) {
            res.json({
                success: true,
                message: 'Password is wrong'
            })
        }
        res.json({
            success: true,
            message: accessToken
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }
};

