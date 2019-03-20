module.exports = (sequelize, type)=>{
    const Journal = sequelize.define('RefJournal',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        tableName:'ref_journal',
        timestamps: false
    });
    const drinkId = sequelize.import('./Drinks.js');
    Journal.belongsTo(drinkId,{foreignKey: 'drinkId'});
    const foodId = sequelize.import('./Food.js');
    Journal.belongsTo(foodId,{foreignKey: 'foodId'});
    const orderId = sequelize.import('./Orders.js');
    Journal.belongsTo(orderId,{foreignKey: 'orderId'});
    return Journal;
};