const dataBase = require('../../dataBase').getInstance();
const bcrypt = require('bcrypt');
const tokenVerify = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res)=>{
    try {
        const Cafe = dataBase.getModel('Cafe');

        const cafeForUpdate = req.params.name;

        if (!cafeForUpdate)throw new Error('No cafe name');

        const cafeInfo = req.body;

        if (!cafeInfo)throw new Error('No cafe information');

        const {password} = cafeInfo;

        if (!password)throw new Error('Field password is empty');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token');

        const {id: cafe_id, name: nameLoggedCafe} = tokenVerify(token, secret);

        const isRegisteredCafe = await Cafe.findOne({
            where: {
                id: cafe_id
            }
        });

        if (!isRegisteredCafe) throw new Error('Cafe with this id does not exist');

        if (cafeForUpdate !== nameLoggedCafe) throw new Error('You cant update this password');

        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, async (err, hash)=>{
            if (err)console.log(err);

            await Cafe.update({
                password: hash
            }, {
                where:{
                    name: cafeForUpdate
                }
            });
        });

        res.json({
            success:true,
            message: `Cafe ${cafeForUpdate} successfully updated`
        });
    }  catch (e) {
        console.log(e);
        res.json({
            success:false,
            message:e.message
        })
    }}
