const dataBase = require('../../dataBase/').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');


module.exports = async (req, res) => {
    try {

        const CafeModel = dataBase.getModel('Cafe');
        const AdminModel = dataBase.getModel('Admin');
        const nameCafeForUpdate = req.params.name;

        if (!nameCafeForUpdate ) throw new Error('No params name for update ');

        const cafeInfo = req.body;
        if (!cafeInfo) throw new Error('Body is empty');

        const {name:newName, password:newPass} = cafeInfo;

        if (!newName || !newPass) throw new Error('Name or password is empty');

        const alreadyExist =  await CafeModel.findOne({
            where:{
                name:newName
            }
        });

        // if (alreadyExist) throw new Error('This name cafe is already exist, please put a different name');


        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {id: adminId} = tokenVerificator(token, secret);
        const isAdmin = await AdminModel.findByPk(adminId);

        if (!isAdmin) throw new Error('This is not admin');

        await CafeModel.update({
            name:newName,
            password:newPass
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