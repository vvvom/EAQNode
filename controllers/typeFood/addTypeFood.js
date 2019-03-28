const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Type_Food= dataBase.getModel('Type_Food');

        const typeFoodInfo = req.body;

        if (!typeFoodInfo) throw new Error('No typeFood body');

        const {type} = Type_Food;

        if (!type) throw new Error('Field is empty');

        const token = req.get('Authorization');

        if (!token) throw new Error('No token, please sign in');

        const alreadyExist = await Type_Food.findOne({
            where: {
                type
            }
        });

        if (alreadyExist) throw new Error('This type of food already exist');

        await Type_Food.create({
            type
        });

        res.json({
            success: true,
            message: `Type of food ${type} successfully inserted`
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
