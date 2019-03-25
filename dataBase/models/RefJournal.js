module.exports = (sequelize, type)=>{
    const Journal = sequelize.define('RefJournal',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        drink_id:{
            type: type.INTEGER,
            allowNull: true
        },
        food_id:{
            type: type.INTEGER,
            allowNull: true
        },
        order_id:{
            type: type.INTEGER,
            allowNull: true
        }
    },{
        tableName:'ref_journal',
        timestamps: false
    });
    const drinkId = sequelize.import('./Drink.js');
    Journal.belongsTo(drinkId,{foreignKey: 'drink_id'});
    const foodId = sequelize.import('./Food.js');
    Journal.belongsTo(foodId,{foreignKey: 'food_id'});
    const orderId = sequelize.import('./Order.js');
    Journal.belongsTo(orderId,{foreignKey: 'order_id'});
    return Journal;
};