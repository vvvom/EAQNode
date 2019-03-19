'use strict';
module.exports = (sequelize, DataTypes) => {
    const drink = sequelize.define('drink', {
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
    const Type_drink = sequelize.import('./type_drink.js');
    drink.belongsTo(Type_drink, {foreignKey: 'type_drink_id'});

    return drink;
};
