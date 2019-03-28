module.exports = (sequelize, DataTypes)=> {
    const RefJournal = sequelize.define('RefJournal',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        food_id: {
            type: DataTypes.INTEGER
        },
        drink_id: {
            type: DataTypes.INTEGER
        },
        order_id: {
            type: DataTypes.INTEGER
        }

    }, {
        tableName: 'ref_journal',
        timestamps:false

    });

    const Drink = sequelize.import('./Drink.js');
    RefJournal.belongsTo(Drink, {foreignKey: 'drink_id'});
    const Food = sequelize.import('./Food.js');
    RefJournal.belongsTo(Food, {foreignKey: 'food_id'});
    const Order = sequelize.import('./Order.js');
    RefJournal.belongsTo(Order, {foreignKey: 'order_id'});
    return RefJournal;
};
