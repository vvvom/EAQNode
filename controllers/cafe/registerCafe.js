const dataBase = require('../../dataBase').getInstance();
const bcrypt = require('bcrypt');

module.exports = async (req,res) => {
    try {
        const  CafeModel = dataBase.getModel('Cafe');
        const  cafeInfo = req.body;

        if (!cafeInfo) throw new Error('No cafe body');
        const {name, password} = cafeInfo;

        if (!name || !password) throw  new Error('Name or password are empty');
        const alreadyExist =  await CafeModel.findOne({
            where:{
                name
            }
        });

        const saltRounds = 10;

        if (alreadyExist) throw new Error('Cafe with this name already exist');

        bcrypt.hash(password,saltRounds,async (err,hash) => {
            if (err) console.log(err);
            await CafeModel.create({
                name,
                password: hash
            });
        });

        res.json({
            success: true,
            message: `Cafe ${name} successfully registered`
        });
        
    }catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};