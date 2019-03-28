const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res)=>{
    try {
        const Drink = dataBase.getModel('Drink');
        const TypeDrink = dataBase.getModel('TypeDrink');
        const Menu = dataBase.getModel('Menu');
const name = req.params.name;
if (!name)throw new Error('No drink');
const drink = await Drink.findOne({
    where:{
        name

    },
    include: [TypeDrink, Menu]
});
if (!drink)throw new Error('Drink does not exist');
res.json({
    success:true,
    message: drink
});

}catch (e) {
    console.log(e);
    res.json({
        success:false,
        message:e.message
    });
}
};
