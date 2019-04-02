const dataBase = require('../../dataBase/').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');


module.exports = async (req, res) => {
    try {

        const CafeModel = dataBase.getModel('Cafe');
        const UserModel = dataBase.getModel('User');
        const nameCafeForUpdate = req.params.name;

        if (!nameCafeForUpdate ) throw new Error('No params name for update ');
        const nameRouteExist = await CafeModel.findOne({
            where:{
                name:nameCafeForUpdate
            }
        });
        if (!nameRouteExist)throw new Error('Rout with this name not exist')

        const cafeInfo = req.body;
        if (!cafeInfo) throw new Error('Body is empty');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: userId} = tokenVerificator(token, secret);
        const isAdmin = await UserModel.findByPk(userId);
        if (!isAdmin) throw new Error('This is not user');

        const {name:newName} = cafeInfo;

        if (!newName) throw new Error('Name is empty');

        const alreadyExist =  await CafeModel.findOne({
            where:{
                name:newName
            }
        });

        if (alreadyExist) throw new Error('This name cafe is already exist, please put a different name');


        await CafeModel.update({
            name:newName
        }, {
            where: {
                name: nameCafeForUpdate
            }
        });

        res.json({
            success: true,
            message: ` Cafe ${nameCafeForUpdate} successfully updated`
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }
};