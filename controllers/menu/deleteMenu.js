const dataBase = require('../../dataBase').getInstance();
const secret = require('../../config/secret');
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {
    try {
        const CafeModel = dataBase.getModel('Cafe');
        const MenuModel = dataBase.getModel('Menu');
        const nameMenuForDelete = req.params.name;
        if (!nameMenuForDelete) throw new Error('No name menu for delete');

        const alreadyExist = await MenuModel.findOne({
            where: {
                name: nameMenuForDelete
            }
        });
        if (!alreadyExist) throw new Error(`This menu ${nameMenuForDelete} not exist`);


        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id: idCafe} = tokenVerificator(token, secret);

        const isRegisteredCafe = await CafeModel.findOne({
            where: {
                id: idCafe
            }
        });
        if (!isRegisteredCafe) throw new Error('Cafe with this id not exist');

        const isOwner = await MenuModel.findOne({
            where: {
                name: nameMenuForDelete,
                cafe_id: idCafe
            }
        });
        if (!isOwner) throw new Error('You are not owner');
        await MenuModel.destroy({
            where: {
                name: nameMenuForDelete
            }
        });
        res.json({
            success: true,
            message: `Menu successfully deleted`
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};
