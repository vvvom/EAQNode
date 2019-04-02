const dataBase = require('../../dataBase/').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');
const bcrypt = require('bcrypt');


module.exports = async (req, res) => {
    try {

        const CafeModel = dataBase.getModel('Cafe');
        const nameCafeForUpdate = req.params.name;

        if (!nameCafeForUpdate ) throw new Error('No params name for update ');

        const cafeInfo = req.body;
        if (!cafeInfo) throw new Error('Body is empty');

        const {password:newPass} = cafeInfo;

        if (!newPass) throw new Error('Password is empty');

        const isExistCafe =  await CafeModel.findOne({
            where:{
                name:nameCafeForUpdate
            }
        });

        if (!isExistCafe) throw new Error(`Cafe ${nameCafeForUpdate} not exists`);


        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        const {name: nameAdminCafe} = tokenVerificator(token, secret);

        if (nameCafeForUpdate !== nameAdminCafe)throw new Error(`You are not admin ${nameCafeForUpdate} cafe`);
        await CafeModel.update({
            password:newPass
        }, {
            where: {
                name: nameCafeForUpdate
            }
        });

        const saltRounds = 10;
        bcrypt.hash(newPass,saltRounds,async (err,hash)=>{
            if (err) console.log(err);
            await CafeModel.update({
                password: hash
            },{
                where:{
                    name: nameCafeForUpdate
                }
            });
        });

        res.json({
            success: true,
            message: ` Password for cafe ${nameCafeForUpdate} successfully updated`
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }
};