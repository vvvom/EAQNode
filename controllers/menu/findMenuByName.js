const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res)=>{
    try {
        const Menu = dataBase.getModel('Menu');
        const Cafe = dataBase.getModel('Cafe');

const name = req.params.name;
if (!name)throw new Error('No menu');
const menu = await Menu.findOne({
    where:{
        name
    },
    include: [Cafe]
});
if (!menu)throw new Error('Menu does not exist');
res.json({
    success:true,
    message: menu
});

}catch (e) {
    console.log(e);
    res.json({
        success:false,
        message:e.message
    });
}
};
