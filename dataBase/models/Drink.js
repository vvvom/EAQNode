'use strict';
module.exports = (sequelize, DataTypes) => {
    const Drink = sequelize.define('Drink', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            ingredients: {
                type: DataTypes.STRING
            },
            type_drink_id: {
                type: DataTypes.INTEGER
            },
        },
        {
            tableName: 'drink',
            timestamps: false
        }
    );
    const Type_drink = sequelize.import('./Type_drink.js');
    Drink.belongsTo(Type_drink, {foreignKey: 'type_drink_id'});

    return Drink;
};
