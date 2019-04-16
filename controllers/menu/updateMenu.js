const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const MenuModel = dataBase.getModel('Menu');
        const CafeModel = dataBase.getModel('Cafe');

        const nameMenuForUpdate = req.params.name;
        if (!nameMenuForUpdate) throw new Error('No params name for update');
        const menuInfo = req.body;
        if (!menuInfo) throw new Error('Body is empty');

        const {name: newName} = menuInfo;
        if (!newName) throw new Error('Filed is empty');

        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id:idCafe} = tokenVerificator(token,secret);

       const isRegisteredCafe = await CafeModel.findOne({
            where:{
                id: idCafe
            }
        });
if (!isRegisteredCafe)throw new Error('Cafe with this id not registered');

        res.json({
            success: true,
            message: `${menu} successfully updated`
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};