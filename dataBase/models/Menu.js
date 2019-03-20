module.exports = (sequelize, type)=>{
    const Menu = sequelize.define('Menu',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cafeId:{
            type: type.INTEGER,
            allowNull: false
        },
        drinkId:{
            type: type.INTEGER,
            allowNull: false
        },
        foodId:{
            type: type.INTEGER,
            allowNull: false
        },
        orderId:{
            type: type.INTEGER,
            allowNull: false
        }
    },{
        tableName:'menu',
        timestamps: false
    });
    const cafeId = sequelize.import('./Cafe.js');
    Menu.belongsTo(cafeId,{foreignKey: 'cafeId'});
    const drinkId = sequelize.import('./Drinks.js');
    Menu.belongsTo(drinkId,{foreignKey: 'drinkId'});
    const foodId = sequelize.import('./Food.js');
    Menu.belongsTo(foodId,{foreignKey: 'foodId'});
    const orderId = sequelize.import('./Orders.js');
    Menu.belongsTo(orderId,{foreignKey: 'orderId'});
    return Menu;
};