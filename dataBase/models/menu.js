'use strict';
module.exports = (sequelize, DataTypes) => {
    const menu = sequelize.define('menu', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cafe_id: {
                type: DataTypes.INTEGER
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
        },
        {
            tableName: 'menu',
            timestamps: false
        }
    );
    const Cafe = sequelize.import('./cafe.js');
    Employee.belongsTo(Cafe, {foreignKey: 'cafe_id'});

    const Food_id = sequelize.import('./food.js');
    Employee.belongsTo(Food_id, {foreignKey: 'food_id'});

    const Drink_id = sequelize.import('./drink.js');
    Employee.belongsTo(Drink_id, {foreignKey: 'drink_id'});

    const Order_id = sequelize.import('./order.js');
    Employee.belongsTo(Order_id, {foreignKey: 'order_id'});

    return menu;
};
