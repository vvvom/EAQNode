const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const CafeModel = dataBase.getModel('Cafe');
        const AdminModel = dataBase.getModel('Admin');
        const nameCafeForDelete = req.params.name;

        if (!nameCafeForDelete) throw new Error('No name for delete ');

        const alreadyExist =  await CafeModel.findOne({
            where:{
                name:nameCafeForDelete
            }
        });
        if (!alreadyExist) throw new Error(`This cafe ${nameCafeForDelete} not exist`);

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id: adminId} = tokenVerificator(token, secret);
        const isUserRegistered = await AdminModel.findByPk(adminId);

        if (!isUserRegistered) throw new Error('This is not admin');

        await CafeModel.destroy({
            where:{
                name:nameCafeForDelete
            }
        });



        res.json({
            success: true,
            message: 'delete successfully'
        })
    } catch (e) {
        res.json({

            success: false,
            message: e.message
        })
    }
};
