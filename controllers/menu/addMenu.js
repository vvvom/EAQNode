const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const MenuModel = dataBase.getModel('Menu');
        const CafeModel = dataBase.getModel('Cafe');
        const menuInfo = req.body;
        if (!menuInfo) throw new Error('No menu info');

        const {name} = menuInfo;
        if (!name) throw new Error('Name menu is empty');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id: idCafe} = tokenVerificator(token, secret);

        const isRegisterCafe = await CafeModel.findOne({
            where:{
                id:idCafe
            }
        });

        if (!isRegisterCafe) throw new Error('Cafe with this id not exist');
        const alreadyExist = await MenuModel.findOne({
            where: {
                name,
                cafe_id: idCafe,
            }
        });
        if (alreadyExist) throw new Error('Menu is already exist');


        await MenuModel.create({
            cafe_id:idCafe,
            name
        });

            res.json({
                success: true,
                message: `Menu ${name} created`
            })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }

};