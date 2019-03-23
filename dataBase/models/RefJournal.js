module.exports = (sequelize, type)=>{
    const Journal = sequelize.define('RefJournal',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        drinkId:{
            type: type.INTEGER,
            allowNull: true
        },
        foodId:{
            type: type.INTEGER,
            allowNull: true
        },
        orderId:{
            type: type.INTEGER,
            allowNull: true
        }
    },{
        tableName:'ref_journal',
        timestamps: false
    });
    const drinkId = sequelize.import('./Drink.js');
    Journal.belongsTo(drinkId,{foreignKey: 'drinkId'});
    const foodId = sequelize.import('./Food.js');
    Journal.belongsTo(foodId,{foreignKey: 'foodId'});
    const orderId = sequelize.import('./Order.js');
    Journal.belongsTo(orderId,{foreignKey: 'orderId'});
    return Journal;
};