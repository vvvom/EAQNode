'use strict';
module.exports = (sequelize, DataTypes) => {
    const ref_journal = sequelize.define('ref_journal', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            food_id: {
                type: DataTypes.INTEGER
            },
            drink_id:{
                type:DataTypes.INTEGER
            },
            order_id:{
                type:DataTypes.INTEGER
            }

        },
        {
            tableName: 'ref_journal',
            timestamps: false
        }
    );
    const Food = sequelize.import('./food.js');
    ref_journal.belongsTo(Food, {foreignKey: 'food_id'});

    const Drink = sequelize.import('./drink.js');
    ref_journal.belongsTo(Drink, {foreignKey: 'drink_id'});

    const Order = sequelize.import('./order.js');
    ref_journal.belongsTo(Order, {foreignKey: 'order_id'});

    return ref_journal;
};