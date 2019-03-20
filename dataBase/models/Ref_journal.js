'use strict';
module.exports = (sequelize, DataTypes) => {
    const Ref_journal = sequelize.define('Ref_journal', {
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
    const Food = sequelize.import('./Food.js');
    Ref_journal.belongsTo(Food, {foreignKey: 'food_id'});

    const Drink = sequelize.import('./Drink.js');
    Ref_journal.belongsTo(Drink, {foreignKey: 'drink_id'});

    const Order = sequelize.import('./Order.js');
    Ref_journal.belongsTo(Order, {foreignKey: 'order_id'});

    return Ref_journal;
};