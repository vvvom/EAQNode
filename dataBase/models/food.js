'use strict';
module.exports = (sequelize, DataTypes) => {
    const food = sequelize.define('food', {
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
            type_food_id: {
                type: DataTypes.INTEGER
            },
        },
        {
            tableName: 'food',
            timestamps: false
        }
    );
    const Type_food = sequelize.import('./type_food.js');
    Employee.belongsTo(Type_food, {foreignKey: 'type_food_id'});
    return food;
};
